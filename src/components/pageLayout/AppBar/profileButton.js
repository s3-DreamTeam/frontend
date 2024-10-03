import { PersonRounded } from '@mui/icons-material';
import { AppBarIconButton } from './appBarIconButton';

const ProfileButton = ({ onClick, shown, disabled }) => {
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