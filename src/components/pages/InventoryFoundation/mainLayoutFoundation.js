import { Stack } from "@mui/material";
import EmptyPage from "../../emptyPage";
import { useEffect, useState } from "react";
import DeleteDialog from "../../Dialogs/DeleteDialog";
import store from "../../../store/store";
import ProcessStatusSnackBar from "../../processStatusSnackbar";

/**
 * # MainLayoutFoundation
 * The grid that is in the main menu, displaying all the user's object in their inventory.
 * Displayed only if the fetch requests works.
 * 
 * ---
 * @param mappedObjects: The list of objects that'll be iterated through to build the grid view of cards
 * @param hasObjects: Boolean stating of the list of mapped objects is empty or not.
 * @param ComponentCard: The card to use when building the grid views. Each objects of the mappedobject is passed to it in an 'object' parameter.
 * @param APIDeleteObject: The call to do to the backend to delete an object from the inventory
 * @param UpdateInventory: The call to do to quietly update that specific inventory
 * @param setObjectToloadingReducer: redux store reducer that sets individual objects as "loading".
 * @param setObjectToloadedReducer: redux store reducer that sets individual objects as "loaded".
 * @param deleteDialogMessage: message shown to the user when they try to delete an object
 * @param emptyInventoryTitle: The title for the page when it's empty
 * @param emptyInventoryMessage: The message displayed below the title of the layout when it's empty.
 */
const MainLayoutFoundation = ({
    mappedObjects,
    hasObjects,
    ComponentCard,

    APIDeleteObject,
    UpdateInventory,
    setObjectToLoadingReducer,
    setObjectToLoadedReducer,

    deleteDialogMessage = "OOps, goofus forgot to specify a delete message dialog",
    emptyInventoryTitle = "Forgor to specify",
    emptyInventoryMessage = "Forgot to specify a custom empty page yapping"
}) => {
    const [showDialog, setShowDialog] = useState(false);
    const [selectedName, setselectedName] = useState("undefined");
    const [selectedId, setSelectedId] = useState(null);

    const [deleteLoading, setDeleteLoading] = useState(false);
    const [deleteSuccess, setDeleteSuccess] = useState(false);
    const [deleteErrors, setDeleteErrors] = useState(null);

    useEffect(() => {
    }, [mappedObjects]);

    function longClick(id) {
        const name = mappedObjects[id].Model;
        setselectedName(name);
        setSelectedId(id);
        setShowDialog(true);
    }

    function deleteSelected() {
        APIDeleteObject({
            ID: selectedId,
            onSuccess: (() => {
                UpdateInventory({});
                setDeleteSuccess(true);
            }),
            onEnd: (() => {
                setDeleteLoading(false);
            }),
            onStart: (() => {
                store.dispatch(setObjectToLoadingReducer(selectedId));
                setDeleteLoading(true);
                setDeleteErrors(null);
                setDeleteSuccess(false);
            }),
            onError: ((e) => {
                store.dispatch(setObjectToLoadedReducer(selectedId));
                setDeleteErrors(String(e));
            })
        });
    }

    const DeleteProcessSnackbarProps = {
        success: {
            message: "Deleted!",
            canClickAway: true,
            hasCloseButton: true,
            canRetry: false,
            autoHideDuration: 2000
        },
        error: {
            message: deleteErrors,
            canClickAway: false,
            hasCloseButton: true,
            canRetry: false,
            autoHideDuration: 2000
        },
        loading: {
            message: "deleting " + selectedName,
            canClickAway: false,
            hasCloseButton: false,
            canRetry: false,
            autoHideDuration: null
        },
    };

    return (
        <>
            {hasObjects
                ? (
                    <Stack
                        spacing={'2rem'}
                        direction={'row'}
                        justifyContent={'space-evenly'}
                        useFlexGap
                        sx={{ flexWrap: 'wrap', padding: '0rem 2rem 2rem 2rem' }}
                    >
                        {Object.entries(mappedObjects).map(([id, value]) => (
                            <ComponentCard
                                key={id}
                                object={value}
                                onClick={() => console.log("SHORT CLICK")}
                                onLongClick={() => { longClick(id); }}
                            />
                        ))}
                    </Stack>
                )
                : <EmptyPage
                    header={emptyInventoryTitle}
                    subtitle={emptyInventoryMessage}
                />
            }
            <DeleteDialog
                onClose={() => { setShowDialog(false); }}
                onConfirm={() => { deleteSelected(); setShowDialog(false); }}
                title={selectedName}
                message={deleteDialogMessage}
                open={showDialog}
            />
            <ProcessStatusSnackBar
                status={deleteLoading ? 'loading' : (deleteErrors != null ? 'error' : (deleteSuccess ? 'success' : 'hidden'))}
                attributes={DeleteProcessSnackbarProps}
            />
        </>
    );
};
export default MainLayoutFoundation;