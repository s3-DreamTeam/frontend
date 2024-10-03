import { MenuOpenRounded, MenuRounded } from '@mui/icons-material';
import { AppBarIconButton } from './appBarIconButton';

const MenuButton = ({ onClick, shown, disabled, opened }) => {
    return (
        <AppBarIconButton
            onClick={onClick}
            disabled={disabled}
            shown={shown}
        >
            {opened ?
                <MenuOpenRounded fontSize='large' /> :
                <MenuRounded fontSize='large' />
            }
        </AppBarIconButton>
    );
};

export default MenuButton;