import { GetAllMachineTemplateIDs } from "../../../api/requests/interface/MachineTemplates/getAllIDs";
import { GetMachineTemplateImage } from "../../../api/requests/interface/MachineTemplates/getImage";
import { GetSurfaceMachineTemplate } from "../../../api/requests/interface/MachineTemplates/getSurface";
import { machineTemplatesLoaded } from "../../../store/initialDataLoadStatusSlice";
import { resetMachineTemplateError, setMachineTemplateData, setMachineTemplateError, setMachineTemplateImageToLoaded, setMachineTemplateImageToLoading, setMachineTemplateToLoaded, setMachineTemplateToLoading } from "../../../store/machineTemplateSlice";
import store from "../../../store/store";
import { cleanUserMachineTemplatesIDs } from "./IdManager";

let processes = 0;
let errorProcess = false;

// Listen... I tried literally everything I could think of... I kept having double tap issues with this bitch...
// None of the by the book implementations I found fixed the issue.
// But this simple global variable?
// You bet it fucking does.
let executing = false;

export const LoadUsersMachineTemplates = async ({
    onStart = () => { },
    onEnd = () => { },
    onSuccess = () => { },
    onError = () => { }
}) => {

    if (executing) {
        // I LOVE TECHNICAL DEBT
        return;
    }
    executing = true;

    // Let's see if I can make a non-janky way of knowing once ALL cards successfully loaded... everything they have to load.
    function processStarted() {
        processes++;
    }

    function processError() {
        errorProcess = true;
    }

    function processEnded() {
        processes--;
        if (processes <= 0) {
            executing = false;
            onEnd();
            if (errorProcess === false) {
                onSuccess();
            } else {
                onError("Some errors occured");
            }
        }
    }

    // Successfully did step 1. Onto step 2
    async function GotAllTheIds(ids) {
        // Removes all the machines with invalid ids. Adds empty slots for the new ones!
        //console.log("cleanUserMachineTemplatesIDs?");
        cleanUserMachineTemplatesIDs(ids);

        setAllToLoading(ids);
        //console.log("surface fetches?");
        SurfaceFetches(ids);
    }

    function SurfaceFetches(ids) {
        ids.forEach(id => {
            GetSurfaceMachineTemplate({
                ID: id,
                onStart: () => {
                    // Set it to loading
                    store.dispatch(setMachineTemplateToLoading(id));
                    store.dispatch(resetMachineTemplateError(id));
                    processStarted();
                },
                onEnd: () => {
                    store.dispatch(setMachineTemplateToLoaded(id));
                    processEnded();
                },
                onError: (e) => {
                    console.warn("Failed to get surface data of machine template with ID: " + id);
                    store.dispatch(setMachineTemplateError({ id: id, error: String(e) }));
                    processError();
                    onError(e);
                },
                onSuccess: (surfaceData) => {
                    store.dispatch(setMachineTemplateData({
                        id: id,
                        data: surfaceData
                    }));
                    //console.log("got ", surfaceData, " for id ", id);

                    GetMachineTemplateImage({
                        ID: id,
                        onStart: () => {
                            // Set it to loading
                            processStarted();
                            store.dispatch(setMachineTemplateImageToLoading(id));
                        },
                        onEnd: () => {
                            processEnded();
                            store.dispatch(setMachineTemplateImageToLoaded(id));
                        },
                        onError: (e) => {
                            console.warn("Failed to get the image data of machine template with ID: " + id);
                            store.dispatch(setMachineTemplateError({ id: id, error: String(e) }));
                            processError();
                            onError(e);
                        },
                        onSuccess: (image) => {
                            //console.log("got ", image, " for id ", id);
                            store.dispatch(setMachineTemplateData({
                                id: id,
                                data: image
                            }));

                            // - TELLS THE APP THAT MACHINES TEMPLATE WERE LOADED AT MINIMUM ONCE - //
                            store.dispatch(machineTemplatesLoaded());
                        }
                    });
                }
            });
        });

        if (ids.length === 0) {
            // - TELLS THE APP THAT MACHINES TEMPLATE WERE LOADED AT MINIMUM ONCE - //
            store.dispatch(machineTemplatesLoaded());
            processEnded();
        }
    }

    //console.log("calling GetAllMachineTemplateIDs");
    // First step: Get all the machine's template IDs
    processes = 0;
    errorProcess = false;
    GetAllMachineTemplateIDs({
        onSuccess: GotAllTheIds,
        onError: (e) => {
            processError();
            processEnded();
            onError(e);
        },
        onStart: onStart
    });
};

async function setAllToLoading(ids) {
    ids.forEach(id => {
        store.dispatch(setMachineTemplateToLoading(id));
    });
}