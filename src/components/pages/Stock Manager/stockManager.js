import { useSelector } from "react-redux";
import HandleUserLoggedInStatus from "../../../utils/verifyLoggedIn";
import InventoryFoundationPage from "../InventoryFoundation/foundationPage";
import { newProductFormBuilder } from "../../../utils/formUtils/formBuilderTemplates";
import ProductInventoryComponentCard from "../../ComponentCards/productInventoryCard";
import { setProductInventoryToLoaded, setProductInventoryToLoading } from "../../../store/productInventorySlice";
import { NewProductInInventory } from "../../../api/requests/interface/ProductInventory/new";
import { DeleteProductFromInventory } from "../../../api/requests/interface/ProductInventory/delete";
import { LoadUsersProductInventory } from "../../../utils/ComplexStoreManagers/ProductInventory/load";
import { UpdateUserProducts } from "../../../utils/ComplexStoreManagers/ProductInventory/update";

const StockManager = () => {
    const loadedBefore = useSelector((state) => state.initialDataLoadStatus.productInventoryLoaded);
    const products = useSelector((state) => state.productInventorySlice.productInventory);

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
            addNewFormObjectGetter={newProductFormBuilder}

            ComponentCard={ProductInventoryComponentCard}

            setObjectToLoadedReducer={setProductInventoryToLoaded}
            setObjectToLoadingReducer={setProductInventoryToLoading}

            alreadyLoadedInventorySelector={loadedBefore}
            inventoryObjectsSelector={products}

            APICreateNewObject={NewProductInInventory}
            APIDeleteObject={DeleteProductFromInventory}
            LoadInventory={LoadUsersProductInventory}
            UpdateInventory={UpdateUserProducts}
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