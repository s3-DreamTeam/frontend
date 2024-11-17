const { NoPhotographyRounded } = require("@mui/icons-material");
const { CircularProgress } = require("@mui/material");

const ItemCardImage = ({
    image = null,
    loading = false,
}) => {
    return (
        <div
            style={{
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'center',
                justifyItems: 'center',
                height: '25vh'
            }}
        >
            {loading
                ? (<div
                    style={{
                        display: 'flex',
                        width: '100%',
                        alignItems: 'center',
                        alignContent: 'center',
                        justifyContent: 'center',
                        justifyItems: 'center',
                    }}
                >
                    <CircularProgress
                        size={120}
                        color="primary"
                    />
                </div>)
                : (
                    image
                        ? (
                            <img
                                src={image}
                                alt={"ERR"}
                                style={{
                                    maxHeight: '25vh',
                                    maxWidth: "100%",
                                    width: '100%',
                                    objectFit: 'cover',
                                    borderRadius: '1.5rem'
                                }}
                            />)
                        : (
                            <NoPhotographyRounded fontSize="large" />
                        ))}
        </div>

    );
};

export default ItemCardImage;