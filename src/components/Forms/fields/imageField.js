import { useEffect, useRef, useState } from "react";
import { FormInput } from "../foundations/input";
import ComponentCardFoundation from "../../ComponentCards/foundation/componentCardFoundation";
import { ImageFromExplorerEvent } from "../../../utils/imageSelectionHandler";
import { ImageSelectorCard } from "../../ImageSelectionComponent/imageSelectionCard";


export const FormImageField = ({ fieldObject, onSomethingChanged }) => {
    const [formField, setFormField] = useState(fieldObject);

    const title = fieldObject.name;

    function imageSourceChanged(newImage) {

        const updatedField = {
            ...formField,
            value: newImage
        };

        setFormField(updatedField);
        onSomethingChanged(updatedField);
    }


    useEffect(() => {
    }, [formField]);

    return (
        <FormInput
            title={title}
            isError={formField.error}
        >
            <ImageSelectorCard
                onFileNameChanged={() => { }}
                onImageChanged={imageSourceChanged}
                onResetSelection={() => {
                    imageSourceChanged(null);
                }}
            />
        </ FormInput>
    );
};