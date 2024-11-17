import { Stack } from "@mui/material";
import ManagerAnalyticsCard from "../Components/Analytics";
import ItemCard from "../Components/ItemCard/ItemCard";

const ManagerTop = ({
    name = "DEFAULT",
    image = null,
    color = null,
    Footer = null,
    imageLoading = false,
    footerLoading = false,
    nameLoading = false
}) => {
    return (
        <Stack
            spacing={"2rem"}
            direction={{ xs: "column", sm: "row" }} // Stack vertically on small screens, horizontally on larger screens.
            justifyContent="center"
            useFlexGap
            sx={{
                flexWrap: "wrap", // Wrap cards as necessary.
                padding: "0rem 2rem 2rem 2rem",
                height: "auto", // Let the stack adjust its height automatically.
                minHeight: "50%",
            }}
        >
            <ItemCard
                name={name}
                image={image}
                color={color}
                Footer={Footer}
                imageLoading={imageLoading}
                footerLoading={footerLoading}
                nameLoading={nameLoading}
            />
            <ManagerAnalyticsCard />
        </Stack>
    );
};

export default ManagerTop;