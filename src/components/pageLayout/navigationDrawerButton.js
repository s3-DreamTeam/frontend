import { Button } from "@mui/material";
import { PathIsCurrentPath } from "../../utils/routerRouteManager";
import { Navigate, useNavigate } from "react-router-dom";

const NavigationDrawerButton = ({ title, icon, correspondingAppRoute }) => {

    const isCurrentPath = PathIsCurrentPath(correspondingAppRoute);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(correspondingAppRoute);
    };

    return (
        <Button
            size='large'
            variant={isCurrentPath ? 'contained' : 'text'}
            color={isCurrentPath ? 'primary' : 'inherit'}
            startIcon={icon}
            sx={{ borderRadius: '2rem' }}
            onClick={handleClick}
        >
            {title}
        </Button>
    );
};

export default NavigationDrawerButton;