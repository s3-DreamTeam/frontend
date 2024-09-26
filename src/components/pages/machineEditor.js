import PageLayout from "../pageLayout/pageLayout";
import EmptyPage from "../emptyPage";

const MachineEditor = () => {
    return (
        <PageLayout title="Machine Editor" childrens={
            <EmptyPage
                header="You don't have any templates"
                subtitle='templates are necessary to keep an inventory of your machines'
            />
        }></PageLayout>
    );
};
export default MachineEditor;