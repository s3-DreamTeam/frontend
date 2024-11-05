import { NoPhotographyRounded } from "@mui/icons-material";
import { CardMedia, CircularProgress } from "@mui/material";

const SmallComponentCardMedia = ({
    title,
    image,
    isLoading,
    size = "large"
}) => {
    let height = (size === "large" ? '12.5rem' : '5.5rem');
    let maxWidth = (size === "large" ? '15rem' : '7.5rem');
    let borderSize = (size === "large" ? '1.5rem' : '0.75rem');
    let progressSize = (size === "large" ? 80 : 40);

    return (
        <CardMedia
            component="div"
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: height, // Image area takes 80%
            }}
        >
            {isLoading
                ? (<CircularProgress
                    size={progressSize}
                    color="inherit"
                />)
                : (
                    image
                        ? (
                            <img
                                src={image}
                                alt={title}
                                style={{
                                    maxHeight: height,
                                    maxWidth: maxWidth,
                                    objectFit: 'cover',
                                    borderRadius: borderSize
                                }}
                            />)
                        : (
                            <NoPhotographyRounded fontSize="large" />
                        ))
            }
        </CardMedia>
    );
};

export default SmallComponentCardMedia;