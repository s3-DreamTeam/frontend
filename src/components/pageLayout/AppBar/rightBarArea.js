import { Stack, Switch } from '@mui/material';
import ProfileButton from './profileButton';
import MoreButton from './moreButton';
import { useDispatch, useSelector } from 'react-redux';
import { setSimulated } from '../../../store/simulatedEndpointSlice';

const RightBarArea = () => {
    const isSimulated = useSelector((state) => state.simulatedEndpointSlice.simulated);
    const dispatch = useDispatch();

    function switchChanged(event) {
        console.log(event);
        dispatch(setSimulated(event.target.checked));
    }

    return (
        <Stack
            direction='row'
            alignItems='center'
            justifyContent='flex-end'
            sx={{ flexGrow: 1 }}
        >
            <ProfileButton shown={true} />
            <Switch
                checked={isSimulated}
                onChange={switchChanged}
                inputProps={{ 'aria-label': 'controlled' }}
            />
        </Stack>
    );
};

export default RightBarArea;