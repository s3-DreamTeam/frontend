import { CircularProgress } from "@mui/material";
import FullPageCard from "../../fullPageCard";

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
        <FullPageCard
            title="Auth Services"
            subtitle="Auth services are currently loading, this may take a few seconds. You'll automatically be redirected to the appropriate page."
            header={
                <CircularProgress
                    sx={{
                        strokeLinecap: 'round'
                    }}
                    size={50}
                />
            }
        />
    );
};

export default KeycloakLoadingPage;