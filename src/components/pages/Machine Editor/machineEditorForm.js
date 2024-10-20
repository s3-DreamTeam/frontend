import { useEffect, useState } from "react";
import { getMachineTemplateObject } from "../../../utils/formUtils/formBuilderTemplates";
import Form from "../../Forms/form";

const MachineEditorForm = ({ }) => {
    const [visualFormData, setVisualFormData] = useState(getMachineTemplateObject());

    function formWasUpdated(newForm) {
        setVisualFormData(newForm);
    }

    function formWasReset() {
        console.log("RESET THE FORM");
        setVisualFormData(getMachineTemplateObject());
    }

    return (
        <Form
            initialObjectTemplate={visualFormData}
            onFormChanged={formWasUpdated}
            onReset={formWasReset}
        />
    );
};

export default MachineEditorForm;