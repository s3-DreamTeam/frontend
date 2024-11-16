import HandleUserLoggedInStatus from "../../../utils/verifyLoggedIn";
import EmptyPage from "../../emptyPage";
import PageLayout from "../../pageLayout/pageLayout";
import Manager from "../Foundations/Managers/manager";

const StockInventory = () => {

    HandleUserLoggedInStatus();

    return (
        <>
            <PageLayout
                title="Temporary"
                hideActionBar={true}
                childrens={
                    <Manager />
                }
            >
            </PageLayout>
        </>
    );
};

export default StockInventory;