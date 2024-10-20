import { useState } from "react";
import { FormBackground } from "./foundations/background";
import { FormSection } from "./foundations/formSection";
import { SubmitArea } from "./submitArea";
import { updateMainFormSections } from "../../utils/formUtils/updateFormParentFromChild";

const Form = ({ initialObjectTemplate }) => {
    //console.log("Big object: ", initialObjectTemplate);
    const [formData, setFormData] = useState(initialObjectTemplate);
    const sections = formData.sections;

    function formSectionChanged(changedSection) {
        //console.log("I'm the main form, a section changed!");
        const updatedForm = updateMainFormSections(formData, changedSection);
        setFormData(updatedForm);
        //console.log(initialObjectTemplate);
    }

    return (
        <FormBackground>
            {sections.map(section => (
                <FormSection
                    section={section}
                    onSomethingChanged={formSectionChanged}
                />
            ))}
            <SubmitArea />
        </FormBackground>
    );
};

export default Form;