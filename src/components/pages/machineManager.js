import { Container, Stack } from "@mui/material";
import ComponentCard from "../componentCard";
import EmptyPage from "../emptyPage";
import PageLayout from "../pageLayout/pageLayout";



const MachineManager = () => {
    return (
        <PageLayout
            title="Machine Manager"
            childrens={
                <Stack
                    spacing={'1rem'}
                    direction={'row'}
                    sx={{ flexWrap: 'wrap' }}
                >
                    <ComponentCard
                        title={"lol"}
                    />
                    <ComponentCard
                        title={"lol"}
                    />
                    <ComponentCard
                        title={"lol"}
                    />
                    <ComponentCard
                        title={"lol"}
                    />
                </Stack>
            }
        >
        </PageLayout>
    );
};

/*
    <EmptyPage
        header="You have no machines"
        subtitle='Ensure you created templates before adding new machines to your inventory.'
    />
*/

export default MachineManager;