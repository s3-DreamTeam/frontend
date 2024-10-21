import { Button, CardActionArea, IconButton } from "@mui/material";
import ColorCard from "../ComponentCards/foundation/styledCard";
import { DeleteRounded } from "@mui/icons-material";
import { useState } from "react";

export const ImageSelectionWithImage = ({
    image,
    imageName,
    onClick,
    onClearClicked,
    disabled
}) => {

    return (
        <div
            style={{
                paddingBottom: '1rem'
            }}
        >
            <ColorCard
                sx={{
                    maxWidth: '15rem',
                    maxHeight: '12.5rem',
                    borderRadius: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <CardActionArea
                    onClick={onClick}
                    disabled={disabled}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                    }}
                >
                    <img
                        src={image}
                        alt={imageName}
                        style={{
                            maxHeight: '12.5rem',
                            maxWidth: '15rem',
                            minWidth: '1rem',
                            objectFit: 'cover',
                        }}
                    />
                </CardActionArea>
            </ColorCard>
            <div
                style={{
                    display: "flex",
                    justifyContent: "right",
                    alignItems: "top",
                    width: "100%"
                }}
            >
                <Button
                    size="medium"
                    color="error"
                    variant="contained"
                    onClick={onClearClicked}
                    disabled={disabled}
                    sx={{
                        borderRadius: '1.5rem',
                        marginTop: '-1rem'
                    }}
                >
                    <DeleteRounded fontSize="medium" />
                </Button>
            </div>
        </div>
    );
};