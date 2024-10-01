import HandleUserLoggedInStatus from "../../../utils/verifyLoggedIn";
import EmptyPage from "../../emptyPage";
import PageLayout from "../../pageLayout/pageLayout";

const StockEditor = () => {

    HandleUserLoggedInStatus();

    return (
        <PageLayout
            title="Stock Editor"
            childrens={
                <EmptyPage
                    header="You don't have any templates"
                    subtitle='templates are necessary to keep an inventory of your products'
                />
            }
        >
        </PageLayout>
    );
};

export default StockEditor;