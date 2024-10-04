import { FormBackground } from "./foundations/background";
import { FormSection } from "./foundations/formSection";

const Form = ({ initialObjectTemplate }) => {

    console.log("Big object: ", initialObjectTemplate);

    return (
        <FormBackground>
            <FormSection section={initialObjectTemplate.headSection} />
        </FormBackground>
    );
};

export default Form;