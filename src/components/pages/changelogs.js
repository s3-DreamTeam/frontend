import EmptyPage from "../emptyPage";
import PageLayout from "../pageLayout/pageLayout";

const Changelogs = () => {
    return (
        <PageLayout
            title="Changelogs"
            hideActionBar={true}
            childrens={
                <EmptyPage
                    header="Missing Changelogs"
                    subtitle="We couldn't find any changelogs to display here."
                />
            }
        >
        </PageLayout>
    );
};

export default Changelogs;