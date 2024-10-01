import { Box, Button, Typography } from "@mui/material";
import ColorCard from "../../ComponentCards/foundation/styledCard";
import { LockRounded } from "@mui/icons-material";

const NotLoggedInPage = () => {

    return (
        <div
            style={{
                position: 'fixed',
                padding: '10rem',
                width: '100%',
                height: '100%',
            }}
        >
            <ColorCard
                sx={{
                    height: '100%',
                    borderRadius: '1.5rem',
                    padding: '2rem',
                    display: 'flex-row',
                    alignContent: 'center'
                }}
                colorvariant='error'
            >
                <div
                    style={{
                        width: '100%',
                        padding: '1rem',
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <LockRounded
                        style={{
                            fontSize: 120,
                        }}
                        sx={{
                            animation: 'errorLock 5s ease-out infinite, errorShake 0.25s ease-out 2'
                        }}
                    />
                </div>
                <Box
                    display="flex-row"
                    justifyItems="center"
                    alignContent="center"
                    sx={{
                        height: '50%'
                    }}
                >
                    <Typography
                        variant="h3"
                        fontWeight={700}
                        align="center"
                    >
                        Authentication failure
                    </Typography>
                    <Typography
                        variant="body1"
                        fontWeight={500}
                        align="center"
                    >
                        You're either not logged in, or you don't have the necessary accesses to view this page
                    </Typography>
                    <div
                        style={{
                            width: '100%',
                            padding: '1rem',
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <Button
                            variant="contained"
                            color="warning"
                            size="large"
                        >
                            Sign-in
                        </Button>
                    </div>
                </Box >
            </ColorCard>
        </div>
    );
};

export default NotLoggedInPage;