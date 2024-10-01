import { Button } from "@mui/material";
import { LockRounded } from "@mui/icons-material";
import FullPageCard from "../../fullPageCard";

const NotLoggedInPage = () => {

    return (
        <FullPageCard
            title="Authentication failure"
            subtitle="You're either not logged in, or you don't have the necessary accesses to view this page"
            color="warning"
            header={
                <LockRounded
                    style={{
                        fontSize: 120,
                    }}
                    sx={{
                        animation: 'errorLock 5s ease-out infinite, errorShake 0.25s ease-out 2'
                    }}
                />
            }
            footer={
                <Button
                    variant="contained"
                    color="warning"
                    size="large"
                >
                    Sign-in
                </Button>
            }
        />
    );
};

export default NotLoggedInPage;