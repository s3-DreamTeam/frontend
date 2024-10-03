import { useState } from "react";
import { machineTemplateObject } from "../../../utils/templateUtils/formBuilderTemplates";
import Form from "../../Forms/form";

const MachineEditorForm = ({ }) => {
    const [visualFormData, setVisualFormData] = useState(machineTemplateObject);

    return (
        <Form
        />
    );
};

export default MachineEditorForm;