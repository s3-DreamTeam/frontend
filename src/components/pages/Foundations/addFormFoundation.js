import { useState } from "react";
import { FormToPacket } from "../../../utils/formUtils/formToPacket";
import ProcessStatusSnackBar from "../../processStatusSnackbar";
import SuccessDialog from "../../Dialogs/SuccessDialog";
import Form from "../../Forms/form";

/**
 * # AddFormFoundation
 * @param onCancel: callback when the form is cancelled one way or another
 * @param APICreateNewObject: Function that takes a packet as entry and calls the backend to create a new object with it.
 * @param formObjectGetter: Function that gets a new form template object when called
 * @param successDialogTitle: Object was created, give a title for the success that is!
 * @param successDialogMessage: Message to put in the success dialog box.
 * @returns 
 */
const AddFormFoundation = ({
    onCancel = () => { },
    APICreateNewObject = () => { console.log("Goofus forgot to specify an APICreateNewObject to their inventory page."); },
    formObjectGetter,
    successDialogTitle = "I forgor the title",
    successDialogMessage = "Oops, this is a generic message!"
}) => {
    const [visualFormData, setVisualFormData] = useState(formObjectGetter());
    const [sendFormLoading, setSendFormLoading] = useState(false);
    const [sendFormError, setSendFormError] = useState(null);
    const [showDialog, setShowDialog] = useState(false);

    function formWasUpdated(newForm) {
        setVisualFormData(newForm);
    }

    function formWasReset() {
        const newForm = formObjectGetter();
        setVisualFormData(newForm);
    }

    function wantToSubmitForm() {
        const packet = FormToPacket(visualFormData);
        SendForm(packet);
    }

    const SendFormProcessSnackbarProps = {
        success: {
            message: "Submitted!",
            canClickAway: true,
            hasCloseButton: true,
            canRetry: false,
            autoHideDuration: 2000
        },
        error: {
            message: sendFormError,
            canClickAway: false,
            hasCloseButton: true,
            canRetry: false,
            autoHideDuration: 2000
        },
        loading: {
            message: 'Sending form...',
            canClickAway: false,
            hasCloseButton: false,
            canRetry: false,
            autoHideDuration: null
        },
    };

    function SendForm(packet) {
        APICreateNewObject({
            packet: packet,

            onError: (err) => {
                setSendFormError(err.message);
            },
            onEnd: () => {
                setSendFormLoading(false);
            },
            onStart: () => {
                setSendFormLoading(true);
                setSendFormError(null);
            },
            onSuccess: () => {
                setSendFormLoading(true);
                setSendFormError(null);
                setShowDialog(true);
            }
        });
    }
    return (
        <>
            <Form
                initialObjectTemplate={visualFormData}
                onFormChanged={formWasUpdated}
                onReset={formWasReset}
                onSubmit={wantToSubmitForm}
                onCancel={onCancel}
                disabled={sendFormLoading}
            />
            <ProcessStatusSnackBar
                status={sendFormLoading ? 'loading' : (sendFormError != null ? 'error' : 'hidden')}
                attributes={SendFormProcessSnackbarProps}
            />
            <SuccessDialog
                title={successDialogTitle}
                message={successDialogMessage}
                open={showDialog}
                onClose={() => {
                    setShowDialog(false);
                    onCancel();
                }}
            />
        </>
    );
};

export default AddFormFoundation;