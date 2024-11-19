import InventorySlot from "./inventorySlot";

const InventoryPageFooter = ({
    inventory = []
}) => {
    return (
        inventory.map((value, index) => (
            <InventorySlot
                key={index}
                slot={value}
            />
        ))
    );
};

export default InventoryPageFooter;