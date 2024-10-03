import { Stack } from '@mui/material';
import ProfileButton from './profileButton';
import MoreButton from './moreButton';

const RightBarArea = () => {
    return (
        <Stack
            direction='row'
            alignItems='center'
            justifyContent='flex-end'
            sx={{ flexGrow: 1 }}
        >
            <ProfileButton shown={true} />
            <MoreButton shown={true} />
        </Stack>
    );
};

export default RightBarArea;