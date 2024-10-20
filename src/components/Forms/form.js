import { FormBackground } from "./foundations/background";
import { FormSection } from "./foundations/formSection";
import { SubmitArea } from "./submitArea";
import { updateMainFormSections } from "../../utils/formUtils/updateFormParentFromChild";
import { VerifyForm } from "../../utils/formUtils/verifying/verifyForm";
import { useEffect, useState } from "react";
import { errorsInForm } from "../../utils/formUtils/verifying/errorsInForm";
import ErrorDialog from "../Dialogs/ErrorDialog";

const Form = ({
    initialObjectTemplate,
    onFormChanged = () => { },
    onSubmit = () => { },
    onCancel = () => { },
    onReset = () => { }
}) => {
    const [form, setForm] = useState(initialObjectTemplate);
    const [showDialog, setShowDialog] = useState(false);

    // When the actual form object changed due to a field getting updated
    function formSectionChanged(changedSection) {
        const updatedForm = updateMainFormSections(initialObjectTemplate, changedSection);
        onFormChanged(updatedForm);
    }

    // Intermediate function between the parent's submiting methods.
    function verifyFormBeforeSubmit() {
        const newForm = Object.create(initialObjectTemplate);
        const verifiedForm = VerifyForm(newForm);
        setForm(verifiedForm);

        if (errorsInForm(verifiedForm)) {
            setShowDialog(true);
        }
    }

    // Update this component if the form object chaneged
    useEffect(() => {
    }, [form]);

    // Overwrite the form if the parameter changed.
    useEffect(() => {
        setForm(initialObjectTemplate);
    }, [initialObjectTemplate]);

    return (
        <>
            <FormBackground>
                {form.sections.map(section => (
                    <FormSection
                        section={section}
                        onSomethingChanged={formSectionChanged}
                    />
                ))}
                <SubmitArea
                    onCancel={onCancel}
                    onReset={onReset}
                    onSubmit={verifyFormBeforeSubmit}
                />
            </FormBackground>
            <ErrorDialog
                title={"Errors detected"}
                message={"We found some errors in your form's field. Please address them and try again."}
                open={showDialog}
                onAgree={() => setShowDialog(false)}
                onClose={() => setShowDialog(false)}
            />
        </>
    );
};

export default Form;