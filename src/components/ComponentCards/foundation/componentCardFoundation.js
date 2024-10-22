import { CardActionArea, CardActions, CircularProgress } from "@mui/material";
import SmallComponentCardHeader from "./smallHeader";
import SmallComponentCardMedia from "./smallMedia";
import ColorCard from "./styledCard";
import SmallDecoratorsArea from "./smallDecoratorArea";
import { GetHighestDecoratorType } from "../../../utils/decoratorPriorityFinder";


const ComponentCardFoundation = ({
    title,
    image,
    decorators,
    state,
    footerComponents,
    onClick,
    isLoading,
    imageIsLoading,
    error
}) => {

    if (decorators === undefined) decorators = [];
    const hasDecorators = decorators.length > 0;

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

    // Lets see if the component has any decorator that would require special colors for the card.
    if (color === 'inherit') {
        let decoratorPriorityColor = GetHighestDecoratorType(decorators);
        color = decoratorPriorityColor;
    }

    if (error) {
        color = 'error';
        title = error;
    }

    return (
        <div
            style={{
                margin: '0',
                padding: '0',
                animation: (error ? 'errorShake 0.25s ease-in 1' : null)
            }}
        >
            <SmallDecoratorsArea
                decorators={decorators}
                globalColor={color}
            />
            <ColorCard
                colorvariant={color}
                sx={{
                    minHeight: '20rem',
                    minWidth: '20rem',
                    maxWidth: '20rem',
                    maxHeight: '20rem',
                    borderRadius: hasDecorators ? '0 1.5rem 1.5rem 1.5rem' : '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                {isLoading
                    ? (<div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '20rem'
                        }}
                    >
                        <CircularProgress
                            size={100}
                            color="inherit"
                        />
                    </div>)
                    : (
                        <CardActionArea
                            onClick={onClick}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                padding: '1.5rem'
                            }}
                        >
                            <SmallComponentCardHeader title={title} />
                            <SmallComponentCardMedia
                                title={title}
                                image={image}
                                isLoading={imageIsLoading}
                            />
                            <CardActions
                                sx={{ height: '2.5rem', flexShrink: 0 }} // Footer takes 10% of the height
                            >
                                {footerComponents}
                            </CardActions>
                        </CardActionArea>
                    )}
            </ColorCard>
        </div>
    );
};

export default ComponentCardFoundation;