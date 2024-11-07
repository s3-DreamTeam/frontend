import { GetProductTemplateImage } from "../../../api/requests/interface/ProductTemplates/getImage";
import { GetSurfaceProductTemplate } from "../../../api/requests/interface/ProductTemplates/getSurface";
import { resetProductTemplateError, setProductTemplateData, setProductTemplateError, setProductTemplateImageToLoaded, setProductTemplateImageToLoading, setProductTemplateToLoaded, setProductTemplateToLoading } from "../../../store/productTemplateSlice";
import store from "../../../store/store";

// This file contains the code necessary to fetch template informations of a machine in your inventory. Either gets the local instance OR actually querries the backend for it.
export function GetProductTemplateFromID({
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
        //console.log("WE GOT THE TEMPLATE LOCALLY?!?");
        onSuccess(localTemplate);
        return;
    }

    // Oh... We don't have it locally... :(
    //console.log("WE DON'T HAVE IT LOCALLY");
    FetchTemplate({
        id: ID,
        onStart: onStart,
        onEnd: onEnd,
        onSuccess: onSuccess,
        onError: onError
    });

}

const GetLocalTemplate = (state, id) => {
    try {
        const completeMachineTemplate = state.machineTemplateSlice.machineTemplates[id];
        return completeMachineTemplate;
    } catch {
        console.warn("inventory item tried to load local template with invalid ID: ", id);
        return null;
    }
};

function FetchTemplate({
    id,
    onStart = () => { },
    onEnd = () => { },
    onError = () => { },
    onSuccess = () => { },
}) {
    GetSurfaceProductTemplate({
        ID: id,
        onStart: () => {
            // Set it to loading
            onStart();
            store.dispatch(setProductTemplateToLoading(id));
            store.dispatch(setProductTemplateImageToLoading(id));
            store.dispatch(resetProductTemplateError(id));
        },
        onEnd: () => {
            store.dispatch(setProductTemplateToLoaded(id));
            onEnd();
        },
        onError: (e) => {
            store.dispatch(setProductTemplateError({ id: id, error: String(e) }));
            onError(e);
        },
        onSuccess: (surfaceData) => {
            store.dispatch(setProductTemplateData({
                id: id,
                data: surfaceData
            }));
            console.log("Fetch Template got: ", surfaceData);
            onSuccess(surfaceData);

            GetProductTemplateImage({
                ID: id,
                onStart: () => {
                    store.dispatch(setProductTemplateImageToLoading(id));
                },
                onEnd: () => {
                    store.dispatch(setProductTemplateImageToLoaded(id));
                },
                onError: (e) => {
                    console.warn("Failed to get the image data with ID: " + id);
                    store.dispatch(setProductTemplateError({ id: id, error: String(e) }));
                },
                onSuccess: (image) => {
                    store.dispatch(setProductTemplateData({
                        id: id,
                        data: image
                    }));
                }
            });
        }
    });
}