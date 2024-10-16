import { useState } from "react";
import { FormBackground } from "./foundations/background";
import { FormSection } from "./foundations/formSection";
import { SubmitArea } from "./submitArea";
import { updateMainFormSections } from "../../utils/templateUtils/updateFormParentFromChild";

const Form = ({ initialObjectTemplate }) => {

    //console.log("Big object: ", initialObjectTemplate);
    const [formData, setFormData] = useState(initialObjectTemplate);

    const subSections = formData.sections;
    const header = formData.headSection;
    //console.log("All subsections: ", header);

    function headerChanged(headerSection) {
        console.log("I'm the main form, a section changed!");
    }

    function subSectionChanged(changedSection) {
        console.log("I'm the main form, a section changed!");
        const updatedForm = updateMainFormSections(formData, changedSection);
        setFormData(updatedForm);

        console.log(initialObjectTemplate);
    }

    return (
        <FormBackground>
            <FormSection
                section={header}
                onSomethingChanged={headerChanged}
            />
            {subSections.map(section => (
                <FormSection
                    section={section}
                    onSomethingChanged={subSectionChanged}
                />
            ))}
            <SubmitArea />
        </FormBackground>
    );
};

export default Form;