import { CardActionArea, CardActions, CircularProgress } from "@mui/material";
import SmallComponentCardHeader from "./smallHeader";
import SmallComponentCardMedia from "./smallMedia";
import ColorCard from "./styledCard";
import SmallDecoratorsArea from "./smallDecoratorArea";
import { GetHighestDecoratorType } from "../../../utils/decoratorPriorityFinder";
import { useEffect, useState } from "react";


const ComponentCardFoundation = ({
    title,
    image,
    decorators,
    state,
    footerComponents,
    onClick = () => { },
    onLongPress = () => { },
    isLoading,
    imageIsLoading,
    error,
    size = "large"
}) => {
    const [isPressing, setIsPressing] = useState(false);
    const [isLongPress, setIsLongPress] = useState(false);

    const [timer, setTimer] = useState(null);

    if (decorators === undefined) decorators = [];
    const hasDecorators = decorators.length > 0;


    const startPress = () => {
        setIsPressing(true);
        const newTimer = setTimeout(() => {
            onLongPress();
            setIsLongPress(true);
        }, 500);
        setTimer(newTimer);
    };

    const endPress = () => {
        if (isPressing) {
            clearTimeout(timer);
            setIsPressing(false);
            if (!isLongPress) {
                onClick(); // Trigger short click if not a long press
            }
        }
        setIsLongPress(false);
    };

    useEffect(() => {
        return () => clearTimeout(timer); // Cleanup on unmount
    }, [timer]);

    let color = 'inherit';


    let maxRem = (size === "large" ? '20rem' : '10rem');
    let StandardBorder = (size === "large" ? '1.5rem' : '0.75rem');
    let decoratorPadding = '0 ' + StandardBorder + ' ' + StandardBorder + ' ' + StandardBorder;
    let actionAreaHeight = (size === "large" ? '2.5rem' : '1.25rem');
    let progressSize = (size === "large" ? 100 : 50);

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
                    minHeight: maxRem,
                    minWidth: maxRem,
                    maxWidth: maxRem,
                    maxHeight: maxRem,
                    borderRadius: hasDecorators ? decoratorPadding : StandardBorder,
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
                            height: maxRem
                        }}
                    >
                        <CircularProgress
                            size={progressSize}
                            color="inherit"
                        />
                    </div>)
                    : (
                        <CardActionArea
                            onMouseDown={startPress}
                            onMouseUp={endPress}
                            onMouseLeave={endPress}
                            onTouchStart={startPress}
                            onTouchEnd={endPress}
                            onTouchCancel={endPress}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                padding: StandardBorder
                            }}
                        >
                            <SmallComponentCardHeader
                                title={title}
                                size={size}
                            />
                            <SmallComponentCardMedia
                                title={title}
                                image={image}
                                size={size}
                                isLoading={imageIsLoading}
                            />
                            <CardActions
                                sx={{ height: actionAreaHeight, flexShrink: 0 }} // Footer takes 10% of the height
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