import { FormBackground } from "./foundations/background";
import { FormTextField } from "./fields/textField";
import { FormCheckbox } from "./fields/checkboxField";
import { FormNumberField } from "./fields/NumberField";
import { NumberFieldBuilder } from "../../utils/templateUtils/formsObjects";

const Form = ({ initialObjectTemplate }) => {
    return (
        <FormBackground>
            <FormTextField />
            <FormTextField />
            <FormCheckbox />
            <FormNumberField NumberFieldObject={NumberFieldBuilder("bruh", true, "hi", "ml", 0, 0)} />
        </FormBackground>
    );
};

export default Form;