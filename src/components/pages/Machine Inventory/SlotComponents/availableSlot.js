import { AddRounded } from "@mui/icons-material";
import { CardActionArea, CardContent, Typography } from "@mui/material";

const AvailableSlot = ({
    slot,
    onSet,
}) => {

    function clicked() {
        console.log("An available slot has been clicked");
        onSet(slot);
    }

    return (
        <CardActionArea
            sx={{
                width: '90%'
            }}
            onClick={clicked}
        >
            <CardContent
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: '100%',
                    width: '100%'
                }}
            >
                <AddRounded
                    style={{
                        fontSize: "1.5rem",
                    }}
                />
                <Typography
                    variant="h6"
                >
                    Click to select a product
                </Typography>
            </CardContent>
        </CardActionArea>
    );
};

export default AvailableSlot;