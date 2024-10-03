import { MoreVertRounded } from '@mui/icons-material';
import { AppBarIconButton } from './appBarIconButton';

const MoreButton = ({ onClick, shown, disabled }) => {
    return (
        <AppBarIconButton
            onClick={onClick}
            disabled={disabled}
            shown={shown}
        >
            <MoreVertRounded fontSize='large' />
        </AppBarIconButton>
    );
};

export default MoreButton;