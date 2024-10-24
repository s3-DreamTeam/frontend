import { useSelector } from "react-redux";
import HandleUserLoggedInStatus from "../../../utils/verifyLoggedIn";
import InventoryFoundationPage from "../InventoryFoundation/foundationPage";
import { productTemplateFormBuilder } from "../../../utils/formUtils/formBuilderTemplates";
import ProductTemplateComponentCard from "../../ComponentCards/productTemplateCard";
import { setProductTemplateToLoaded, setProductTemplateToLoading } from "../../../store/productTemplateSlice";
import { NewProductTemplate } from "../../../api/requests/interface/ProductTemplates/new";
import { DeleteProductTemplate } from "../../../api/requests/interface/ProductTemplates/delete";
import { LoadUsersProductTemplates } from "../../../utils/ComplexStoreManagers/ProductTemplate/load";
import { UpdateUserProductTemplates } from "../../../utils/ComplexStoreManagers/ProductTemplate/update";

const StockEditor = () => {
    const loadedUserTemplatesBefore = useSelector((state) => state.initialDataLoadStatus.productTemplatesLoaded);
    const templates = useSelector((state) => state.productTemplateSlice.productTemplates);

    HandleUserLoggedInStatus();

    return (
        <InventoryFoundationPage
            MainPageTitle="Product Editor"
            emptyInventoryTitle="You don't have any templates"
            emptyInventoryMessage="product templates are necessary to create inventories for your machines"
            loadingSnackbarMessage="Loading product templates..."
            deleteObjectDialogMessage="Any machines using products with this template will ALSO be deleted. This action IS NOT reversible."

            AddNewFormTitle="New Product Template"
            addNewSuccessDialogTitle="Template created"
            addNewSuccessDialogMessage="Your product template was successfully created and added to your inventory!"
            addNewFormObjectGetter={productTemplateFormBuilder}

            ComponentCard={ProductTemplateComponentCard}

            setObjectToLoadedReducer={setProductTemplateToLoaded}
            setObjectToLoadingReducer={setProductTemplateToLoading}

            alreadyLoadedInventorySelector={loadedUserTemplatesBefore}
            inventoryObjectsSelector={templates}

            APICreateNewObject={NewProductTemplate}
            APIDeleteObject={DeleteProductTemplate}
            LoadInventory={LoadUsersProductTemplates}
            UpdateInventory={UpdateUserProductTemplates}
        />
    );
};

export default StockEditor;