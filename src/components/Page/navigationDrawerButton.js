import { Button } from "@mui/material";

const NavigationDrawerButton = ({ title, icon, selected }) => {
    return (
        <Button
            size='large'
            variant={selected ? 'contained' : 'text'}
            color={selected ? 'primary' : 'inherit'}
            startIcon={icon}
            sx={{ borderRadius: '2rem' }}
        >
            {title}
        </Button>
    );
};

export default NavigationDrawerButton;