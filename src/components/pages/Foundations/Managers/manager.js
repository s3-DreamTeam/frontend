import { Box, Typography } from "@mui/material";
import ColorCard from "../../../ComponentCards/foundation/styledCard";
import ManagerTop from "./Containers/managerTop";

/**
 * # Manager
 * The object that creates an inventory manager page.
 * @returns 
 */
const Manager = () => {
    return (
        <Box
            display="flexbox"
            justifyItems="cdnter"
            alignContent="top"
            sx={{
                height: '100%',
            }}
        >
            <ManagerTop />
            <Box>
                <ColorCard>
                    <Typography>
                        Bruh
                    </Typography>
                </ColorCard>
                <ColorCard>
                    <Typography>
                        Bruh
                    </Typography>
                </ColorCard>
            </Box>
        </Box>
    );
};

export default Manager;