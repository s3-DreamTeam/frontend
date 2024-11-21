import { Typography } from "@mui/material";
import ProfileOverlay from "./profileOverlay";

const ProfileMenu = ({
    authenticated = false,
    profile = null
}) => {

    /*
    profile = {
        "given_name": "amog",
        "family_name": "sus",
        "email": "bruh@usherbrooke.ca",
        "name": "amog sus"
    };
    authenticated = true;
    */
    return (
        <div
            style={{
                paddingLeft: '1rem',
                paddingRight: '1rem',
                paddingTop: '0.25rem',
                paddingBottom: '0.25rem',
            }}
        >
            {authenticated
                ? <ProfileOverlay profile={profile} />
                : <Typography
                    color="warning"
                >
                    Not logged in? No services.
                </Typography>
            }
        </div>
    );
};

export default ProfileMenu;