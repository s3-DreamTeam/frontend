import { useSelector } from "react-redux";
import HandleUserLoggedInStatus from "../../../utils/verifyLoggedIn";
import { newProductFormBuilder } from "../../../utils/formUtils/formBuilderTemplates";
import ProductInventoryComponentCard from "../../ComponentCards/productInventoryCard";
import { setProductInventoryToLoaded, setProductInventoryToLoading } from "../../../store/productInventorySlice";
import { NewProductInInventory } from "../../../api/requests/interface/ProductInventory/new";
import { DeleteProductFromInventory } from "../../../api/requests/interface/ProductInventory/delete";
import { LoadUsersProductInventory } from "../../../utils/ComplexStoreManagers/ProductInventory/load";
import { UpdateUserProducts } from "../../../utils/ComplexStoreManagers/ProductInventory/update";
import ProductTemplateComponentCard from "../../ComponentCards/productTemplateCard";
import { LoadUsersProductTemplates } from "../../../utils/ComplexStoreManagers/ProductTemplate/load";
import { GetFullProductTemplate } from "../../../api/requests/interface/ProductTemplates/getFull";
import InventoryFoundationPage from "../Foundations/Inventory/foundationPage";
import { ProductInventoryFormBuilder } from "../../../utils/formUtils/Forms/ProductInventory/Builder";

const StockManager = () => {
    const loadedBefore = useSelector((state) => state.initialDataLoadStatus.productInventoryLoaded);
    const templatesLoadedBefore = useSelector((state) => state.initialDataLoadStatus.productTemplatesLoaded);

    const products = useSelector((state) => state.productInventorySlice.productInventory);
    const templates = useSelector((state) => state.productTemplateSlice.productTemplates);

    HandleUserLoggedInStatus();

    return (
        <InventoryFoundationPage
            MainPageTitle="Stock Manager"
            emptyInventoryTitle="You don't have any products"
            emptyInventoryMessage="Ensure you created templates before adding new products to your inventory."
            loadingSnackbarMessage="Loading products..."
            deleteObjectDialogMessage="This product will be removed from all machines that currently has it."

            AddNewFormTitle="New Product"
            addNewSuccessDialogTitle="Product created"
            addNewSuccessDialogMessage="Your product was successfully created and added to your inventory!"
            noTemplatesDialogMessage="We couldn't find any templates for you to choose from. Ensure that you've created at least one product template before trying to add new products to your inventory! Go to 'Stock Editor'"
            noTemplatesDialogTitle="No Product Templates :("
            objectNameKey="Variant"
            addNewFormObjectGetter={ProductInventoryFormBuilder}

            ComponentCard={ProductInventoryComponentCard}
            TemplateComponentCard={ProductTemplateComponentCard}

            setObjectToLoadedReducer={setProductInventoryToLoaded}
            setObjectToLoadingReducer={setProductInventoryToLoading}

            alreadyLoadedInventorySelector={loadedBefore}
            alreadyLoadedTemplatesSelector={templatesLoadedBefore}
            inventoryObjectsSelector={products}
            templateObjectsSelector={templates}

            APIGetFullTemplate={GetFullProductTemplate}
            APICreateNewObject={NewProductInInventory}
            APIDeleteObject={DeleteProductFromInventory}
            LoadInventory={LoadUsersProductInventory}
            UpdateInventory={UpdateUserProducts}
            LoadTemplates={LoadUsersProductTemplates}
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