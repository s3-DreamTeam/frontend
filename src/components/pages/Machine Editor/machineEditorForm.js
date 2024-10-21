import { useState } from "react";
import { getMachineTemplateObject } from "../../../utils/formUtils/formBuilderTemplates";
import Form from "../../Forms/form";
import { FormToPacket } from "../../../utils/formUtils/formToPacket";
import ProcessStatusSnackBar from "../../processStatusSnackbar";
import { NewMachineTemplate } from "../../../api/requests/interface/newMachineTemplate";

const MachineEditorForm = ({
    onCancel = () => { }
}) => {
    const [visualFormData, setVisualFormData] = useState(getMachineTemplateObject());
    const [sendFormLoading, setSendFormLoading] = useState(false);
    const [sendFormError, setSendFormError] = useState(null);

    function formWasUpdated(newForm) {
        setVisualFormData(newForm);
    }

    function formWasReset() {
        const newForm = getMachineTemplateObject();
        setVisualFormData(newForm);
    }

    function wantToSubmitForm() {
        const packet = FormToPacket(visualFormData);
        console.log(packet);

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
        NewMachineTemplate({
            machineTemplateObject: packet,

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
        </>
    );
};

export default MachineEditorForm;