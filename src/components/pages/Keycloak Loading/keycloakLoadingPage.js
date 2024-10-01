import { Box, Button, CircularProgress, Typography } from "@mui/material";
import ColorCard from "../../ComponentCards/foundation/styledCard";
import { CheckBoxRounded, LockRounded } from "@mui/icons-material";

/**
 * # KeycloakLoadingPage
 * Takes the whole page, shown to the user when keycloak is initiating on their ends.
 * If it loads for a while, keycloak probably isn't working for you. Yippie.
 * 
 * ---
 * @return {*} 
 */
const KeycloakLoadingPage = () => {

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
            >
                <div
                    style={{
                        width: '100%',
                        padding: '1rem',
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <CircularProgress
                        sx={{
                            strokeLinecap: 'round'
                        }}
                        color="textDisabled"
                        size={50}
                    >
                        <CheckBoxRounded />
                    </CircularProgress>
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
                        variant="h4"
                        color="textDisabled"
                        align="center"
                    >
                        Auth Services
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textDisabled"
                        align="center"
                    >
                        Auth services are currently loading, this may take a few seconds. You will automatically be redirected to Snacky once loading is finished.
                    </Typography>
                </Box >
            </ColorCard>
        </div>
    );
};

export default KeycloakLoadingPage;