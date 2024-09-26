import { Button, Card, Typography } from "@mui/material";

const ComponentCard = ({ title, image, decorators, state, footerText }) => {

    let color = 'inherit';

    switch (state) {
        case ('warning'):
            color = 'warning';
            break;
        case ('error'):
            color = 'error';
            break;
        case ('success'):
            color = 'success';
            break;
    }

    return (
        <Button
            variant="contained"
            color={color}
            elevation={5}
            sx={{
                width: '10rem',
                height: '10rem',
                borderRadius: '1.5rem',
                padding: '1rem'
            }}
        >
            <Typography
                variant="h6"
            >{title}
            </Typography>
        </Button>
    );
};

export default ComponentCard;