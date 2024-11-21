import { PersonOffRounded, PersonRounded } from '@mui/icons-material';
import { AppBarIconButton } from './appBarIconButton';
import { keycloakInstance } from '../../../api/keycloak';
import { Menu } from '@mui/material';
import { useState } from 'react';
import ProfileMenu from './profileMenu';

const ProfileButton = ({ onClick, shown, disabled }) => {
    const [anchorPosition, setAnchorPosotion] = useState(null);
    const [userProfile, setUserProfile] = useState(null);

    async function getInfo() {
        const instance = keycloakInstance();
        let userInfo = null;
        try {
            userInfo = await instance.loadUserInfo();
        } catch {
            console.warn("Failed to load user info... rip...");
        }
        setUserProfile(userInfo);
        console.log(instance);
    }

    function clicked(event) {
        getInfo();
        setAnchorPosotion(event.currentTarget);
    }

    const authed = keycloakInstance().authenticated;
    const opened = Boolean(anchorPosition);
    return (
        <>
            <AppBarIconButton
                onClick={clicked}
                disabled={disabled}
                shown={shown}
                isRight={true}
            >
                {
                    authed
                        ? <PersonRounded fontSize='large' />
                        : <PersonOffRounded fontSize='large' color='error' />
                }
            </AppBarIconButton>
            <Menu
                open={opened}
                anchorEl={anchorPosition}
                onClose={() => {
                    setAnchorPosotion(null);
                }}
                PaperProps={{
                    sx: {
                        borderRadius: '1.5rem'
                    }
                }}
            >
                <ProfileMenu
                    authenticated={authed}
                    profile={userProfile}
                />
            </Menu>
        </>
    );
};

export default ProfileButton;