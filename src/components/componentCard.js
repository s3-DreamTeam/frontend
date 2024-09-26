import { Card, Typography } from "@mui/material";

/**
 * # EmptyPage
 * Component shown in the middle of a main menu page when it's empty.
 * Informs the users as to what that means for them, what they can
 * do about it and shit like that.
 * 
 * @param {*} header : Big title of the empty page
 * @param {*} subtitle : Text informing them what they should do
 * @param {*} actionButton : Component to display below the texts. Keep empty for nothing. 
 */
const ComponentCard = ({ title, image, decorators, state, footerText }) => {
    return (
        <Card
            sx={{
                width: '10rem',
                height: '10rem',
                borderRadius: '1.5rem',
                padding: '1rem'
            }}
        >
            <Typography
                variant="h6"
            >{title}</Typography>
        </Card>
    );
};

export default ComponentCard;