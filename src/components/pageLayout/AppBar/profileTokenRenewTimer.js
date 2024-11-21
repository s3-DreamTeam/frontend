import { useEffect, useState } from "react";
import { keycloakInstance } from "../../../api/keycloak";
import { Typography } from "@mui/material";
import StyledTooltip from "../../styledTooltip";

const ProfileTokenRenewTimer = () => {
    const [time, setTime] = useState("...");
    const [expired, setExpired] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            UpdateComponents();
        }, 1000);

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    function UpdateComponents() {
        const keycloak = keycloakInstance();

        let expiresAt = 0;
        try {
            expiresAt = keycloak.tokenParsed.exp;
        } catch (e) {
            setError(e.message);
            setTime("Err");
            return;
        }

        const currentTime = Math.floor(Date.now() / 1000);
        let timeLeft = expiresAt - currentTime;

        if (timeLeft < 0) {
            setExpired(true);
            setTime("Expired");
            return;
        }

        if (expired) {
            setExpired(false);
        }

        let unit = 's';

        if (timeLeft > 60) {
            timeLeft = Math.floor(timeLeft / 60);
            unit = 'm';
        }

        setTime(`${timeLeft}${unit}`);
    }

    return (
        <StyledTooltip
            title="Time until token is renewed"
        >
            <Typography
                color={error ? "error" : (expired ? "warning" : "textDisabled")}
                variant="body2"
            >
                {time}
            </Typography>
        </StyledTooltip>
    );
};

export default ProfileTokenRenewTimer;