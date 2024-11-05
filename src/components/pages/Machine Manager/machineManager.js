import { useSelector } from "react-redux";
import HandleUserLoggedInStatus from "../../../utils/verifyLoggedIn";
import InventoryFoundationPage from "../InventoryFoundation/foundationPage";
import { newMachineFormBuilder } from "../../../utils/formUtils/formBuilderTemplates";
import { setMachineInventoryToLoaded, setMachineInventoryToLoading } from "../../../store/machineInventorySlice";
import { NewMachineInInventory } from "../../../api/requests/interface/MachineInventory/new";
import { DeleteMachineFromInventory } from "../../../api/requests/interface/MachineInventory/delete";
import { LoadUsersMachineInventory } from "../../../utils/ComplexStoreManagers/MachineInventory/load";
import { UpdateUserMachineInventory } from "../../../utils/ComplexStoreManagers/MachineInventory/update";
import MachineInventoryComponentCard from "../../ComponentCards/machineInventoryCard";

const MachineManager = () => {
    const loadedBefore = useSelector((state) => state.initialDataLoadStatus.machineInventoryLoaded);
    const machines = useSelector((state) => state.machineInventorySlice.machineInventory);

    HandleUserLoggedInStatus();

    return (
        <InventoryFoundationPage
            MainPageTitle="Machine Manager"
            emptyInventoryTitle="You don't have any machines"
            emptyInventoryMessage="Ensure you created templates before adding new machines to your inventory."
            loadingSnackbarMessage="Loading machines..."
            deleteObjectDialogMessage="This machine will permanently be deleted. Stats will be lost and inventory returned to your stocks."

            AddNewFormTitle="New Machine"
            addNewSuccessDialogTitle="Machine created"
            addNewSuccessDialogMessage="Your machine was successfully created and added to your inventory"
            addNewFormObjectGetter={newMachineFormBuilder}

            ComponentCard={MachineInventoryComponentCard}

            setObjectToLoadedReducer={setMachineInventoryToLoaded}
            setObjectToLoadingReducer={setMachineInventoryToLoading}

            alreadyLoadedInventorySelector={loadedBefore}
            inventoryObjectsSelector={machines}

            APICreateNewObject={NewMachineInInventory}
            APIDeleteObject={DeleteMachineFromInventory}
            LoadInventory={LoadUsersMachineInventory}
            UpdateInventory={UpdateUserMachineInventory}
        />
    );
};

export default MachineManager;