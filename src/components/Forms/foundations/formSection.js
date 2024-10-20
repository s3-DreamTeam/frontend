import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { ExpandMoreRounded } from "@mui/icons-material";
import { FieldRenderer } from "../fields/fieldRenderer";
import { useState } from "react";
import { updateFormParentFromChild } from "../../../utils/formUtils/updateFormParentFromChild";
import { GetSectionErrors } from "../../../utils/formUtils/getSectionErrors";

export const FormSection = ({ section, onSomethingChanged }) => {
    console.log("Form section", section);
    const [formSection, setFormSection] = useState(section);
    const [sectionHasErrors, setSectionHasErrors] = useState(false);

    if (section === undefined) return;

    const name = section.name;
    const components = section.components;

    function onFieldChanged(field) {
        console.log("I'm a section, and a field changed");
        console.warn(field.error);
        const updatedSection = updateFormParentFromChild(formSection, field);
        setFormSection(updatedSection);

        setSectionHasErrors(GetSectionErrors(updatedSection));
        onSomethingChanged(formSection);
    }

    return (
        <Accordion
            defaultExpanded
            elevation={0}
            sx={{
                width: '100%',
                borderRadius: '0.5rem',
                backgroundColor: '#00000000'
            }}
        >
            <AccordionSummary
                expandIcon={
                    <ExpandMoreRounded
                        fontSize="large"
                        color={sectionHasErrors ? "error" : "inherit"}
                        style={{
                            fontSize: 50
                        }}
                    />
                }
            >
                <Typography
                    variant="h4"
                    fontWeight={600}
                    color={sectionHasErrors ? "error" : "inherit"}
                >
                    {name}
                </Typography>
            </AccordionSummary>
            <AccordionDetails
            >
                {components.map(object => (
                    <FieldRenderer formObject={object} onSomethingChanged={onFieldChanged} />
                ))}
            </AccordionDetails>
        </Accordion>
    );
};