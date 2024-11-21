import { PersonRounded } from '@mui/icons-material';
import { AppBarIconButton } from './appBarIconButton';
import { keycloakInstance } from '../../../api/keycloak';

const ProfileButton = ({ onClick, shown, disabled }) => {

    async function getInfo() {
        const instance = keycloakInstance();
        let userInfo = null;
        let userProfile = null;

        try {
            userInfo = await instance.loadUserInfo();
        } catch {
            console.warn("Failed to load user info... rip...");
        }

        try {
            userProfile = await instance.loadUserProfile();
        } catch {
            console.warn("Failed to load user profile... rip...");
        }
        console.log(instance);

        console.log("authenticated? ", instance.authenticated);
        console.log("Info? ", userInfo);
        console.log("Profile? ", userProfile);
    }

    function onClick() {
        getInfo();
    }

    return (
        <AppBarIconButton
            onClick={onClick}
            disabled={disabled}
            shown={shown}
            isRight={true}
        >
            <PersonRounded fontSize='large' />
        </AppBarIconButton>
    );
};

export default ProfileButton;