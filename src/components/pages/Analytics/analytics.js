import HandleUserLoggedInStatus from "../../../utils/verifyLoggedIn";
import EmptyPage from "../../emptyPage";
import PageLayout from "../../pageLayout/pageLayout";

const Analytics = () => {

    HandleUserLoggedInStatus();

    return (
        <PageLayout
            title="Analytics"
            hideActionBar={true}
            childrens={
                <EmptyPage
                    header="No available analysis"
                    subtitle="We couldn't find any products or machines to run analytics on."
                />
            }
        >
        </PageLayout>
    );
};

export default Analytics;