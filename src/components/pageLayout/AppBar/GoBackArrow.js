import { ArrowBackRounded } from '@mui/icons-material';
import { AppBarIconButton } from './appBarIconButton';

const GoBackArrow = ({ onClick, shown, disabled }) => {
    return (
        <AppBarIconButton
            onClick={onClick}
            disabled={disabled}
            shown={shown}
        >
            <ArrowBackRounded fontSize='large' />
        </AppBarIconButton>
    );
};

export default GoBackArrow;