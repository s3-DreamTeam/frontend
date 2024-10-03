import { Typography } from '@mui/material';

const BarTitle = ({ text, onClick, shown }) => {
    return (
        <Typography
            variant='h5'
            component='div'
            fontWeight={600}
            color='inherit'
            justifyContent='center'
            sx={{
                ml: '1rem'
            }}
        >
            {text}
        </Typography>
    );
};

export default BarTitle;