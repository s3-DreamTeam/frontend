import { Stack } from "@mui/material";
import ErrorPageFooter from "./errorPageFooter";
import InventoryPageFooter from "./inventoryPageFooter";
import LoadingPageFooter from "./loadingPageFooter";

const MachineInventoryPageFooter = ({
    inventory = null,
    errors = null,
    loading = null
}) => {
    return (
        <Stack
            spacing="1rem"
            sx={{
                paddingX: '2rem'
            }}
        >
            {
                errors
                    ? <ErrorPageFooter />
                    : (
                        loading
                            ? <LoadingPageFooter />
                            : <InventoryPageFooter inventory={inventory} />
                    )
            }
        </Stack>
    );
};

export default MachineInventoryPageFooter;