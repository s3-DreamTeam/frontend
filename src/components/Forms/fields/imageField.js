import { useEffect, useState } from "react";
import { FormInput } from "../foundations/input";
import ComponentCardFoundation from "../../ComponentCards/foundation/componentCardFoundation";


export const FormImageField = ({ fieldObject, onSomethingChanged }) => {
    const [formField, setFormField] = useState(fieldObject);
    const title = fieldObject.name;
    //const required = fieldObject.required;
    function imageChanged(event) {
        console.warn("TO DO");
        //onSomethingChanged(updatedField);
    }

    function imageCardClicked() {
        //open("");
    }

    useEffect(() => {
    }, [formField]);

    return (
        <FormInput
            title={title}
            isError={formField.error}
        >
            <ComponentCardFoundation
                title="No image"
                image={null}
            />
        </ FormInput>
    );
};