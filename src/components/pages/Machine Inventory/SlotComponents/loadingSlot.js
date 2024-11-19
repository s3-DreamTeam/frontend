import { LinearProgress } from "@mui/material";

const LoadingSlot = () => {
    return (
        <LinearProgress
            sx={{
                width: '90%',
                borderRadius: '1.5rem',
                marginRight: '2rem'
            }}
        />
    );
};

export default LoadingSlot;