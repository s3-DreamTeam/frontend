import InventorySlot from "./inventorySlot";

const InventoryPageFooter = ({
    machine,
    template,
    inventory = [],
    onSet,
    onAdd,
    onRemove,
    onReset
}) => {

    if (inventory === null) {
        inventory = [];
    }

    // Hopefully sorts stuff out
    inventory.sort((a, b) => {
        if (a.Slot < b.Slot) return -1;
        if (a.Slot > b.Slot) return 1;
        return 0; // they are equal
    });

    return (
        <>
            {inventory.map((value, index) => (
                <InventorySlot
                    key={index}
                    slot={value}
                    onAdd={onAdd}
                    onRemove={onRemove}
                    onReset={onReset}
                    onSet={onSet}
                    machine={machine}
                    template={template}
                />
            ))}
            <div
                style={{
                    height: '25vh'
                }}
            />
        </>
    );
};

export default InventoryPageFooter;