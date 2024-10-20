import { useState } from "react";
import { machineTemplateObject } from "../../../utils/formUtils/formBuilderTemplates";
import Form from "../../Forms/form";

const MachineEditorForm = ({ }) => {
    const [visualFormData, setVisualFormData] = useState(machineTemplateObject);

    return (
        <Form
            initialObjectTemplate={visualFormData}
        />
    );
};

export default MachineEditorForm;