import { GetMachineTemplateImage } from "../../../api/requests/interface/MachineTemplates/getImage";
import { GetSurfaceMachineTemplate } from "../../../api/requests/interface/MachineTemplates/getSurface";
import { resetMachineTemplateError, setMachineTemplateData, setMachineTemplateError, setMachineTemplateImageToLoaded, setMachineTemplateImageToLoading, setMachineTemplateToLoaded, setMachineTemplateToLoading } from "../../../store/machineTemplateSlice";
import store from "../../../store/store";

// This file contains the code necessary to fetch template informations of a machine in your inventory. Either gets the local instance OR actually querries the backend for it.
export function GetTemplateFromID({
    ID,
    onStart = () => { },
    onEnd = () => { },
    onError = () => { },
    onSuccess = () => { }
}) {

    // Do we have this ID locally?
    const state = store.getState();
    const localTemplate = GetLocalTemplate(state, ID);

    if (localTemplate !== null && localTemplate !== undefined) {
        onSuccess(localTemplate);
        return;
    }

    // Oh... We don't have it locally... :(
    FetchTemplate({
        id: ID,
        onStart: onStart,
        onEnd: onEnd,
        onSuccess: onSuccess,
        onError: onError
    });

}

const GetLocalTemplate = (state, id) => {
    const completeMachineTemplate = state.machineTemplateSlice.machineTemplates[id];
    return completeMachineTemplate;
};

function FetchTemplate({
    id,
    onStart = () => { },
    onEnd = () => { },
    onError = () => { },
    onSuccess = () => { },
}) {
    GetSurfaceMachineTemplate({
        ID: id,
        onStart: () => {
            // Set it to loading
            onStart();
            store.dispatch(setMachineTemplateToLoading(id));
            store.dispatch(setMachineTemplateImageToLoading(id));
            store.dispatch(resetMachineTemplateError(id));
        },
        onEnd: () => {
            store.dispatch(setMachineTemplateToLoaded(id));
            onEnd();
        },
        onError: (e) => {
            store.dispatch(setMachineTemplateError({ id: id, error: String(e) }));
            onError(e);
        },
        onSuccess: (surfaceData) => {
            store.dispatch(setMachineTemplateData({
                id: id,
                data: surfaceData
            }));
            console.log("Fetch Template got: ", surfaceData);
            onSuccess(surfaceData);

            GetMachineTemplateImage({
                ID: id,
                onStart: () => {
                    store.dispatch(setMachineTemplateImageToLoading(id));
                },
                onEnd: () => {
                    store.dispatch(setMachineTemplateImageToLoaded(id));
                },
                onError: (e) => {
                    console.warn("Failed to get the image data with ID: " + id);
                    store.dispatch(setMachineTemplateError({ id: id, error: String(e) }));
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
}