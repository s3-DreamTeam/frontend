import { Typography } from "@mui/material";
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
                    actionButton={<Typography
                        color="warning"
                        align="center"
                        fontWeight="800"
                        variant="h6"
                        sx={{
                            opacity: '50%'
                        }}
                    >
                        Analytics features have yet to be implemented.
                    </Typography>}
                />
            }
        >
        </PageLayout>
    );
};

export default Analytics;