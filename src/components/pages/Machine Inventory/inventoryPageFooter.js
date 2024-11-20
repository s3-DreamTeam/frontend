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