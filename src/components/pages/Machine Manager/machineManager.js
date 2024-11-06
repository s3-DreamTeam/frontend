import { useSelector } from "react-redux";
import HandleUserLoggedInStatus from "../../../utils/verifyLoggedIn";
import { setMachineInventoryToLoaded, setMachineInventoryToLoading } from "../../../store/machineInventorySlice";
import { NewMachineInInventory } from "../../../api/requests/interface/MachineInventory/new";
import { DeleteMachineFromInventory } from "../../../api/requests/interface/MachineInventory/delete";
import { LoadUsersMachineInventory } from "../../../utils/ComplexStoreManagers/MachineInventory/load";
import { UpdateUserMachineInventory } from "../../../utils/ComplexStoreManagers/MachineInventory/update";
import MachineInventoryComponentCard from "../../ComponentCards/machineInventoryCard";
import InventoryFoundationPage from "../Foundations/Inventory/foundationPage";
import MachineTemplateComponentCard from "../../ComponentCards/machineTemplateCard";
import { MachineInventoryFormBuilder } from "../../../utils/formUtils/Forms/MachineInventory/Builder";
import { GetFullMachineTemplate } from "../../../api/requests/interface/MachineTemplates/getFull";

const MachineManager = () => {
    const loadedBefore = useSelector((state) => state.initialDataLoadStatus.machineInventoryLoaded);
    const templatesLoadedBefore = useSelector((state) => state.initialDataLoadStatus.machineTemplatesLoaded);

    const machines = useSelector((state) => state.machineInventorySlice.machineInventory);
    const templates = useSelector((state) => state.machineTemplateSlice.machineTemplates);

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
            noTemplatesDialogMessage="We couldn't find any templates for you to choose from. Ensure that you've created at least one machine templates before trying to add machines to your inventory! Go to 'Machine Editor' to create some."
            noTemplatesDialogTitle="No Machine Templates :/"
            addNewFormObjectGetter={MachineInventoryFormBuilder}

            ComponentCard={MachineInventoryComponentCard}
            TemplateComponentCard={MachineTemplateComponentCard}

            setObjectToLoadedReducer={setMachineInventoryToLoaded}
            setObjectToLoadingReducer={setMachineInventoryToLoading}

            alreadyLoadedInventorySelector={loadedBefore}
            alreadyLoadedTemplatesSelector={templatesLoadedBefore}
            inventoryObjectsSelector={machines}
            templateObjectsSelector={templates}

            APIGetFullTemplate={GetFullMachineTemplate}
            APICreateNewObject={NewMachineInInventory}
            APIDeleteObject={DeleteMachineFromInventory}
            LoadInventory={LoadUsersMachineInventory}
            UpdateInventory={UpdateUserMachineInventory}
        />
    );
};

export default MachineManager;