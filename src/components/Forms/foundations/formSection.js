import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { ExpandMoreRounded } from "@mui/icons-material";
import { FieldRenderer } from "../fields/fieldRenderer";

export const FormSection = ({ section }) => {

    console.log("Form section", section);

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
                {section.map((formLine) => {
                    <FieldRenderer formObject={formLine} />;
                })}
            </AccordionDetails>
        </Accordion>
    );
};