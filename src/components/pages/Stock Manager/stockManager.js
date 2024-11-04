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

const StockManager = () => {
    const loadedUserTemplatesBefore = useSelector((state) => state.initialDataLoadStatus.productTemplatesLoaded);
    const templates = useSelector((state) => state.productTemplateSlice.productTemplates);

    HandleUserLoggedInStatus();

    return (
        <InventoryFoundationPage
            MainPageTitle="Stock Manager"
            emptyInventoryTitle="You don't have any products"
            emptyInventoryMessage="Ensure you created templates before adding new products to your inventory."
            loadingSnackbarMessage="Loading products..."
            deleteObjectDialogMessage="This product will be removed from all machines that currently has it"

            AddNewFormTitle="New Product"
            addNewSuccessDialogTitle="Product created"
            addNewSuccessDialogMessage="Your product was successfully created and added to your inventory!"
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

export default StockManager;


/*
import HandleUserLoggedInStatus from "../../../utils/verifyLoggedIn";
import EmptyPage from "../../emptyPage";
import PageLayout from "../../pageLayout/pageLayout";

const StockManager = () => {

    HandleUserLoggedInStatus();

    return (
        <PageLayout
            title="Stock Manager"
            childrens={
                <EmptyPage
                    header="You have no products"
                    subtitle='Ensure you created templates before adding new products to your inventory.'
                />
            }
        >
        </PageLayout>
    );
};

export default StockManager;
*/