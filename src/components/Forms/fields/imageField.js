import { useEffect, useState } from "react";
import { FormInput } from "../foundations/input";
import { ImageSelectorCard } from "../../ImageSelectionComponent/imageSelectionCard";
import { ImageFieldValueTester } from "../../../utils/formUtils/valueTesters/imageFieldValueTester";


export const FormImageField = ({ fieldObject, onSomethingChanged }) => {
    const [isError, setIsError] = useState(fieldObject.error !== null);
    const [errorString, setErrorString] = useState(fieldObject.error);
    const [image, setImage] = useState(fieldObject.value);
    const title = fieldObject.name;

    function imageSourceChanged(newImage) {

        const updatedField = {
            ...fieldObject,
            value: newImage,
            error: ImageFieldValueTester(newImage, fieldObject),
        };

        // Errors and its messages are done like this to avoid error persistence when going out and back in a form that had an error on that field previously.
        setIsError(updatedField.error !== null);
        setErrorString(updatedField.error);
        setImage(newImage);
        onSomethingChanged(updatedField);
    }

    useEffect(() => {
        setIsError(fieldObject.error !== null);
        setErrorString(fieldObject.error);
        setImage(fieldObject.value);
    }, [fieldObject]);

    return (
        <FormInput
            title={title}
            isError={isError}
            subText={errorString}
            align="top"
        >
            <ImageSelectorCard
                onFileNameChanged={() => { }}
                onImageChanged={imageSourceChanged}
                onResetSelection={() => {
                    imageSourceChanged(null);
                }}
                isError={isError}
                image={image}
            />
        </ FormInput>
    );
};