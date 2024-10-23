import { useSelector } from "react-redux";
import InventoryFoundationPage from "../InventoryFoundation/foundationPage";
import MachineTemplateComponentCard from "../../ComponentCards/machineTemplateCard";
import { setMachineTemplateToLoaded, setMachineTemplateToLoading } from "../../../store/machineTemplateSlice";
import { machineTemplateFormBuilder } from "../../../utils/formUtils/formBuilderTemplates";
import { NewMachineTemplate } from "../../../api/requests/interface/MachineTemplates/new";
import { DeleteMachineTemplate } from "../../../api/requests/interface/MachineTemplates/delete";
import { LoadUsersMachineTemplates } from "../../../utils/ComplexStoreManagers/MachineTemplate/load";
import { UpdateUserMachineTemplates } from "../../../utils/ComplexStoreManagers/MachineTemplate/update";


const MachineEditor = () => {
    const loadedUserTemplatesBefore = useSelector((state) => state.initialDataLoadStatus.machineTemplatesLoaded);
    const templates = useSelector((state) => state.machineTemplateSlice.machineTemplates);

    return (
        <InventoryFoundationPage
            MainPageTitle="Machine Editor"
            emptyInventoryTitle="You don't have any templates"
            emptyInventoryMessage="machine templates are necessary to create an inventory of your machines"
            loadingSnackbarMessage="Loading machine templates..."
            deleteObjectDialogMessage="Any machines using this template will ALSO be deleted. This action IS NOT reversible."

            AddNewFormTitle="New Machine Template"
            addNewSuccessDialogTitle="Template created"
            addNewSuccessDialogMessage="Your machine template was successfully created and added to your inventory!"
            addNewFormObjectGetter={machineTemplateFormBuilder}

            ComponentCard={MachineTemplateComponentCard}

            setObjectToLoadedReducer={setMachineTemplateToLoaded}
            setObjectToLoadingReducer={setMachineTemplateToLoading}

            alreadyLoadedInventorySelector={loadedUserTemplatesBefore}
            inventoryObjectsSelector={templates}

            APICreateNewObject={NewMachineTemplate}
            APIDeleteObject={DeleteMachineTemplate}
            LoadInventory={LoadUsersMachineTemplates}
            UpdateInventory={UpdateUserMachineTemplates}
        />
    );
};

export default MachineEditor;