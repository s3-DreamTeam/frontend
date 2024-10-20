import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { ExpandMoreRounded } from "@mui/icons-material";
import { FieldRenderer } from "../fields/fieldRenderer";
import { useEffect, useState } from "react";
import { updateFormParentFromChild } from "../../../utils/formUtils/updateFormParentFromChild";
import { GetSectionErrors } from "../../../utils/formUtils/getSectionErrors";

export const FormSection = ({ section, onSomethingChanged }) => {
    const [formSection, setFormSection] = useState(section);
    const [sectionHasErrors, setSectionHasErrors] = useState(false);

    // Prevents the form from keeping its old state when going out then back inside of it.
    useEffect(() => {
        setFormSection(section);
        setSectionHasErrors(GetSectionErrors(section));
    }, [section]);

    if (section === undefined) return;

    const name = section.name;
    const components = section.components;

    function onFieldChanged(field) {
        const updatedSection = updateFormParentFromChild(formSection, field);
        setFormSection(updatedSection);

        setSectionHasErrors(GetSectionErrors(updatedSection));
        onSomethingChanged(formSection);
    }

    const thereIsErrors = GetSectionErrors(section);

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
                        color={thereIsErrors ? "error" : "inherit"}
                        style={{
                            fontSize: 50
                        }}
                    />
                }
            >
                <Typography
                    variant="h4"
                    fontWeight={600}
                    color={thereIsErrors ? "error" : "inherit"}
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