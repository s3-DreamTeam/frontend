import { CardActionArea, CardActions } from "@mui/material";
import SmallComponentCardHeader from "./smallHeader";
import SmallComponentCardMedia from "./smallMedia";
import ColorCard from "./styledCard";


const ComponentCardFoundation = ({ title, image, decorators, state, footerComponents }) => {

    let color = 'inherit';

    switch (state) {
        default:
            color = 'inherit';
            break;
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
        <ColorCard
            colorVariant={color}
            sx={{
                minHeight: '20rem',
                minWidth: '20rem',
                maxWidth: '20rem',
                maxHeight: '20rem',
                borderRadius: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <CardActionArea
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    padding: '1.5rem'
                }}
            >
                <SmallComponentCardHeader title={title} />
                <SmallComponentCardMedia title={title} image={image} />
                <CardActions
                    sx={{ height: '10%', flexShrink: 0 }} // Footer takes 10% of the height
                >
                    {footerComponents}
                </CardActions>
            </CardActionArea>
        </ColorCard>
    );
};

export default ComponentCardFoundation;