import { Stack } from "@mui/material";
import ManagerAnalyticsCard from "../Components/Analytics";
import ItemCard from "../Components/ItemCard/ItemCard";

const ManagerTop = () => {
    return (
        <Stack
            spacing={"2rem"}
            direction={{ xs: "column", sm: "row" }} // Stack vertically on small screens, horizontally on larger screens.
            justifyContent={"space-evenly"}
            useFlexGap
            sx={{
                flexWrap: "wrap", // Wrap cards as necessary.
                padding: "0rem 2rem 2rem 2rem",
                height: "auto", // Let the stack adjust its height automatically.
                minHeight: "50%"
            }}
        >
            <ItemCard />
            <ManagerAnalyticsCard />
        </Stack>
    );
};

export default ManagerTop;