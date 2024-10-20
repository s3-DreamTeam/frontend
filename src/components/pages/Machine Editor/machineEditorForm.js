import { useState } from "react";
import { getMachineTemplateObject } from "../../../utils/formUtils/formBuilderTemplates";
import Form from "../../Forms/form";
import { VerifyForm } from "../../../utils/formUtils/verifying/verifyForm";

const MachineEditorForm = ({ }) => {
    const [visualFormData, setVisualFormData] = useState(getMachineTemplateObject());

    function formWasUpdated(newForm) {
        setVisualFormData(newForm);
    }

    function formWasReset() {
        const newForm = getMachineTemplateObject();
        setVisualFormData(newForm);
    }

    function wantToSubmitForm() {
        const newForm = VerifyForm(Object.create(visualFormData));
        setVisualFormData(newForm);
    }

    return (
        <Form
            initialObjectTemplate={visualFormData}
            onFormChanged={formWasUpdated}
            onReset={formWasReset}
            onSubmit={wantToSubmitForm}
        />
    );
};

export default MachineEditorForm;