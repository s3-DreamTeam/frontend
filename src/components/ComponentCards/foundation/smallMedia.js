import { NoPhotographyRounded } from "@mui/icons-material";
import { CardMedia } from "@mui/material";

const SmallComponentCardMedia = ({ title, image }) => {
    return (
        <CardMedia
            component="div"
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '12.5rem', // Image area takes 80%
            }}
        >
            {image ? (
                <img
                    src={image}
                    alt={title}
                    style={{
                        maxHeight: '15rem',
                        maxWidth: '15rem',
                        objectFit: 'cover',
                        borderRadius: '1.5rem'
                    }}
                />
            ) : (
                <NoPhotographyRounded fontSize="large" />
            )}
        </CardMedia>
    );
};

export default SmallComponentCardMedia;