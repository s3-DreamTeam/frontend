import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { useState } from "react";

import { FormTextField } from "../fields/textField";
import { FormCheckbox } from "../fields/checkboxField";
import { FormNumberField } from "../fields/NumberField";
import { CheckboxFieldBuilder, DropdownFieldBuilder, NumberFieldBuilder, TextBoxFieldBuilder } from "../../../utils/templateUtils/formsObjects";
import { DropdownField } from "../fields/dropdownField";
import { ExpandMoreRounded } from "@mui/icons-material";

export const FormSection = ({ FormSection }) => {
    const [shown, setShownState] = useState(true);

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
                        style={{
                            fontSize: 50
                        }}
                    />
                }
            >
                <Typography
                    variant="h4"
                    fontWeight={600}
                >
                    Some title
                </Typography>
            </AccordionSummary>
            <AccordionDetails
            >
                <FormTextField fieldObject={TextBoxFieldBuilder("text field", true, "placeholder")} />
                <FormTextField fieldObject={TextBoxFieldBuilder("another", false, null)} />
                <FormCheckbox fieldObject={CheckboxFieldBuilder("check box", false)} />
                <FormNumberField fieldObject={NumberFieldBuilder("number of ml", true, "hi", "ml", 0, 0)} />
                <FormNumberField fieldObject={NumberFieldBuilder("width", true, null, "cm", 10, 20)} />
                <DropdownField fieldObject={DropdownFieldBuilder("a dropdown", false, "choice A", ["choice A", "choice B", "choice C"], null)} />
            </AccordionDetails>
        </Accordion>
    );
};