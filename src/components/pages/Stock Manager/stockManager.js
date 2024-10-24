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