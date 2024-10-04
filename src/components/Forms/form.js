import { FormBackground } from "./foundations/background";
import { FormSection } from "./foundations/formSection";

const Form = ({ initialObjectTemplate }) => {
    return (
        <FormBackground>
            <FormSection />
            <FormSection />
            <FormSection />
            <FormSection />
        </FormBackground>
    );
};

export default Form;