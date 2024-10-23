import { GetAllMachineTemplateIDs } from "../../../api/requests/interface/MachineTemplates/getAllIDs";
import { GetMachineTemplateImage } from "../../../api/requests/interface/MachineTemplates/getImage";
import { GetSurfaceMachineTemplate } from "../../../api/requests/interface/MachineTemplates/getSurface";
import { resetMachineTemplateError, setMachineTemplateData, setMachineTemplateError, setMachineTemplateImageToLoaded, setMachineTemplateImageToLoading, setMachineTemplateToLoaded, setMachineTemplateToLoading } from "../../../store/machineTemplateSlice";
import store from "../../../store/store";
import { cleanUserMachineTemplatesIDs, getNewMachineTemplateIds } from "./IdManager";


/**
 * # UpdateUserMachineTemplates
 * Quietly loads all changes into the user's machine templates
 * @param {*} param0 
 */
export const UpdateUserMachineTemplates = async ({
    onStart = () => { },
    onEnd = () => { },
    onSuccess = () => { },
    onError = () => { }
}) => {
    function GotAllTheIds(ids) {
        console.warn(ids);
        const newIds = getNewMachineTemplateIds(ids);
        cleanUserMachineTemplatesIDs(ids);
        setEmptyToLoading(ids);
        console.log("The new ids are: ", newIds);

        // Only surface fetch the new stuff...
        SurfaceFetches(newIds);
    }

    function SurfaceFetches(ids) {
        ids.forEach(id => {
            GetSurfaceMachineTemplate({
                ID: id,
                onStart: () => {
                    // Set it to loading
                    store.dispatch(setMachineTemplateToLoading(id));
                    store.dispatch(resetMachineTemplateError(id));
                },
                onEnd: () => {
                    store.dispatch(setMachineTemplateToLoaded(id));
                },
                onError: (e) => {
                    console.warn("Failed to get surface data of machine template with ID: " + id);
                    store.dispatch(setMachineTemplateError({ id: id, error: String(e) }));
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
                            store.dispatch(setMachineTemplateImageToLoading(id));
                        },
                        onEnd: () => {
                            store.dispatch(setMachineTemplateImageToLoaded(id));
                        },
                        onError: (e) => {
                            console.warn("Failed to get the image data of machine template with ID: " + id);
                            store.dispatch(setMachineTemplateError({ id: id, error: String(e) }));
                            onError(e);
                        },
                        onSuccess: (image) => {
                            store.dispatch(setMachineTemplateData({
                                id: id,
                                data: image
                            }));
                        }
                    });
                }
            });
        });
    }

    GetAllMachineTemplateIDs({
        onSuccess: GotAllTheIds,
        onError: onError,
        onStart: onStart,
        onEnd: onEnd
    });
};

async function setEmptyToLoading(ids) {
    const state = store.getState();
    ids.forEach(id => {
        console.warn(state.machineTemplateSlice.machineTemplates[id]);
        if (state.machineTemplateSlice.machineTemplates[id].isLoading === null) {
            store.dispatch(setMachineTemplateImageToLoading(id));
        }
    });
}