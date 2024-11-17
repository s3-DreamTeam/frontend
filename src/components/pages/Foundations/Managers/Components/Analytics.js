import { Box, Typography } from "@mui/material";
import TopManagerCard from "../Containers/topCards";
import { QuestionMarkRounded } from "@mui/icons-material";

const ManagerAnalyticsCard = () => {
    return (
        <TopManagerCard
            minWidth="25rem"
        >
            <Box
                display="flex" // Corrected from "flexbox"
                flexDirection="column" // Stack children vertically
                justifyContent="center" // Center vertically
                alignItems="center" // Center horizontally
                sx={{
                    height: "100%", // Ensure the box fills the card's height
                    padding: '2rem'
                }}
            >
                <Typography
                    variant="h4"
                    color="textDisabled"
                    align="center"
                    sx={{ display: "flex", alignItems: "center" }} // Align icon and text
                >
                    <QuestionMarkRounded
                        style={{
                            fontSize: "5rem",
                        }}
                    />
                </Typography>
                <Typography
                    variant="h4"
                    color="textDisabled"
                    align="center"
                >
                    {"Analytics"}
                </Typography>
                <Typography
                    variant="body2"
                    color="textDisabled"
                    align="center"
                >
                    {"We couldn't find any analytics for this item"}
                </Typography>
            </Box>
        </TopManagerCard>
    );
};

export default ManagerAnalyticsCard;