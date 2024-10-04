import { FormBackground } from "./foundations/background";
import { FormSection } from "./foundations/formSection";

const Form = ({ initialObjectTemplate }) => {

    console.log("Big object: ", initialObjectTemplate);

    const subSections = initialObjectTemplate.sections;
    const header = initialObjectTemplate.headSection;
    console.log("All subsections: ", header);
    return (
        <FormBackground>
            <FormSection section={header} />
            {subSections.map(section => (
                <FormSection section={section} />
            ))}
        </FormBackground>
    );
};

export default Form;