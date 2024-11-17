import { Box, Typography } from "@mui/material";
import ColorCard from "../../../ComponentCards/foundation/styledCard";
import ManagerTop from "./Containers/managerTop";

/**
 * # Manager
 * The object that creates an inventory manager page.
 * @returns 
 */
const Manager = ({
    name = "",
    image = null,
    cardColor = null,
    CardFooter = null,
    imageLoading = false,
    footerLoading = false,
    nameLoading = false,
    children
}) => {
    return (
        <Box
            display="flexbox"
            justifyItems="center"
            justifyContent="center"
            alignContent="top"
            alignItems="center"
            sx={{
                height: '100%',
                width: '100%'
            }}
        >
            <ManagerTop
                name={name}
                image={image}
                color={cardColor}
                Footer={CardFooter}
                imageLoading={imageLoading}
                footerLoading={footerLoading}
                nameLoading={nameLoading}
            />
            {children}
        </Box>
    );
};

export default Manager;