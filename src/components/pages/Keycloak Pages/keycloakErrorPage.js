import { ErrorRounded } from "@mui/icons-material";
import FullPageCard from "../../fullPageCard";

const KeycloakErrorPage = ({ message }) => {
    return (
        <FullPageCard
            title="Fatal Error"
            subtitle={message}
            color="error"
            header={
                <ErrorRounded
                    style={{
                        fontSize: 120,
                    }}
                    sx={{
                        animation: 'errorLock 2.5s ease-out infinite, errorShake 0.25s ease-out 2'
                    }}
                />
            }
        />
    );
};

export default KeycloakErrorPage;