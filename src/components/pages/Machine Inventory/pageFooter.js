import { Stack } from "@mui/material";
import ErrorPageFooter from "./errorPageFooter";
import InventoryPageFooter from "./inventoryPageFooter";
import LoadingPageFooter from "./loadingPageFooter";

const MachineInventoryPageFooter = ({
    inventory = null,
    errors = null,
    loading = null,
    machine,
    template,
    onSet,
    onAdd,
    onRemove,
    onReset,
    onRetry
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
                    ? <ErrorPageFooter error={errors} onRetry={onRetry} />
                    : (
                        loading
                            ? <LoadingPageFooter />
                            : <InventoryPageFooter
                                machine={machine}
                                template={template}
                                inventory={inventory}
                                onAdd={onAdd}
                                onRemove={onRemove}
                                onReset={onReset}
                                onSet={onSet}
                            />
                    )
            }
        </Stack>
    );
};

export default MachineInventoryPageFooter;