import { useEffect, useState } from "react";
import AddFormFoundation from "../addFormFoundation";
import WholePageLoading from "../../../wholePageLoading";
import ProcessStatusSnackBar from "../../../processStatusSnackbar";

/**
 * # InventoryFormFoundation
 * @param onCancel: callback when the form is cancelled one way or another
 * @param APICreateNewObject: Function that takes a packet as entry and calls the backend to create a new object with it.
 * @param formObjectGetter: Function that gets a new form template object when called
 * @param successDialogTitle: Object was created, give a title for the success that is!
 * @param successDialogMessage: Message to put in the success dialog box.
 * @returns 
 */
const InventoryFormFoundation = ({
    onCancel = () => { },
    APICreateNewObject = () => { console.log("Goofus forgot to specify an APICreateNewObject to their inventory page."); },
    APIGetFullTemplate = () => { },
    formObjectGetter,
    formSelectedTemplate,
    successDialogTitle = "I forgor the title",
    successDialogMessage = "Oops, this is a generic message!"
}) => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setErrors] = useState(null);
    const [fullTemplate, setFullTemplate] = useState(null);

    useEffect(() => {
        if (!loading && !fullTemplate) {
            FetchFullTemplate();
        }
    }, []);

    function FetchFullTemplate() {
        APIGetFullTemplate({
            ID: formSelectedTemplate.id,

            onError: (err) => {
                setErrors(err.message);
            },
            onEnd: () => {
                setLoading(false);
            },
            onStart: () => {
                setLoading(true);
                setErrors(null);
                setSuccess(false);
            },
            onSuccess: (object) => {
                setLoading(false);
                setErrors(null);
                setSuccess(true);
                setFullTemplate(object);
                console.log("Received: ", object);
            }
        });
    }

    function GetForm() {
        return formObjectGetter(fullTemplate);
    }

    const SnackBarProps = {
        success: {
            message: "Loaded",
            canClickAway: true,
            hasCloseButton: true,
            canRetry: false,
            autoHideDuration: 1000
        },
        error: {
            message: error,
            canClickAway: false,
            hasCloseButton: true,
            canRetry: false,
            autoHideDuration: 3000
        },
        loading: {
            message: "Loading template form",
            canClickAway: false,
            hasCloseButton: false,
            canRetry: false,
            autoHideDuration: null
        },
    };

    return (
        <>
            {fullTemplate ?
                (<AddFormFoundation
                    onCancel={onCancel}
                    APICreateNewObject={APICreateNewObject}
                    formObjectGetter={GetForm}
                    successDialogMessage={successDialogMessage}
                    successDialogTitle={successDialogTitle}
                />)
                :
                (<WholePageLoading />)}
            <ProcessStatusSnackBar
                status={loading ? 'loading' : (error != null ? 'error' : (success ? 'success' : 'hidden'))}
                attributes={SnackBarProps}
            />
        </>
    );
};

export default InventoryFormFoundation;