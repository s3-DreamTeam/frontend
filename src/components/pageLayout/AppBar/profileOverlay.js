import { Button, Typography } from "@mui/material";
import ProfileCircle from "./profileCircle";
import StyledDivider from "../../divider/styledDivider";
import { keycloakInstance } from "../../../api/keycloak";

const ProfileOverlay = ({
    profile = null
}) => {
    function Logout() {
        const instance = keycloakInstance();
        instance.logout({
            redirectUri: window.location.origin
        });
    }

    return (
        profile === null
            ? <Typography
                color="error"
            >
                Couldn't fetch infos
            </Typography>
            : <div
                style={{
                    display: 'inline',
                }}
            >
                <div
                    style={{
                        display: 'flex'
                    }}
                >
                    <ProfileCircle
                        firstname={profile.given_name}
                        lastname={profile.family_name}
                    />
                    <div
                        style={{
                            paddingLeft: '1rem'
                        }}
                    >
                        <Typography
                            fontWeight={800}
                        >
                            {profile.name}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textDisabled"
                        >
                            {profile.email}
                        </Typography>
                    </div>
                </div>
                <div style={{ margin: '0.25rem' }} />
                <StyledDivider thiccness={2} />
                <div style={{ margin: '0.25rem' }} />
                <div
                    style={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'right',
                        justifyItems: 'right',
                        alignContent: 'right',
                        alignItems: 'right'
                    }}
                >
                    <Button
                        sx={{
                            margin: '0'
                        }}
                        onClick={Logout}
                    >
                        Logout
                    </Button>
                </div>
            </div>
    );
};

export default ProfileOverlay;