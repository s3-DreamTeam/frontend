import { Stack, Switch } from '@mui/material';
import ProfileButton from './profileButton';
import MoreButton from './moreButton';
import { useDispatch, useSelector } from 'react-redux';
import { setSimulated } from '../../../store/simulatedEndpointSlice';
import QuestionDialog from '../../Dialogs/QuestionDialog';
import { useState } from 'react';

const RightBarArea = () => {
    const [dialogShown, setDialogShown] = useState(false);
    const [otherDialogShown, setOtherDialogShown] = useState(false);
    const isSimulated = useSelector((state) => state.simulatedEndpointSlice.simulated);
    const dispatch = useDispatch();

    function switchChanged(event) {
        //console.log(event);
        const wantedState = event.target.checked;
        if (wantedState) {
            setDialogShown(true);
        } else {
            setOtherDialogShown(true);
        }
    }

    return (
        <>
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
            <QuestionDialog
                onConfirm={() => {
                    dispatch(setSimulated(true));
                    setDialogShown(false);
                }}
                onClose={() => {
                    setDialogShown(false);
                }}
                title="Simulate the backend?"
                message="You'll enter a temporary state where all the features are shown to you. However, refreshing or leaving the page will get rid of all progress made in this mode. Anything currently loaded will be forgotten."
                open={dialogShown}
            />
            <QuestionDialog
                onConfirm={() => {
                    dispatch(setSimulated(false));
                    setOtherDialogShown(false);
                }}
                onClose={() => {
                    setOtherDialogShown(false);
                }}
                title="Stop the simulation?"
                message="Everything done during the simulation will be forgotten. The App will resume periodic backend checks and your official data will replace simulated ones."
                open={otherDialogShown}
            />
        </>
    );
};

export default RightBarArea;