import { FormBackground } from "./foundations/background";
import { FormSection } from "./foundations/formSection";
import { SubmitArea } from "./submitArea";
import { updateMainFormSections } from "../../utils/formUtils/updateFormParentFromChild";

const Form = ({
    initialObjectTemplate,
    onFormChanged = () => { },
    onSubmit = () => { },
    onCancel = () => { },
    onReset = () => { }
}) => {
    //console.log("Big object: ", initialObjectTemplate);
    //const [formData, setFormData] = useState(initialObjectTemplate);
    const sections = initialObjectTemplate.sections;
    function formSectionChanged(changedSection) {
        console.log("I'm the main form, a section changed!");
        const updatedForm = updateMainFormSections(initialObjectTemplate, changedSection);
        onFormChanged(updatedForm);
        console.log(updatedForm);
    }

    return (
        <FormBackground>
            {sections.map(section => (
                <FormSection
                    section={section}
                    onSomethingChanged={formSectionChanged}
                />
            ))}
            <SubmitArea
                onCancel={onCancel}
                onReset={onReset}
                onSubmit={onSubmit}
            />
        </FormBackground>
    );
};

export default Form;