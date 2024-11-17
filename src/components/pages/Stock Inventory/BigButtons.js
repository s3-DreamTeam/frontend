import { CardActionArea, CardContent, Typography } from "@mui/material";
import ColorCard from "../../ComponentCards/foundation/styledCard";

const BigButton = ({
    Icon,
    name,
    color,
    onClick
}) => {
    return (
        <ColorCard
            colorvariant={color}
            alignContent="space-evenly"
            alignItems="space-evenly"
            justifyContent="space-evenly"
            justifyItems="space-evenly"
            sx={{
                display: 'flex',
                borderRadius: '1.5rem',
                flex: '1 1 auto',
                flexDirection: "column",
                justifyContent: "space-evenly",
                justifyItems: 'space-evenly',
                alignItems: "space-evenly",
                alignContent: "space-evenly",
            }}
        >
            <CardActionArea
                sx={{
                    height: '100%',
                    padding: '0rem'
                }}
                onClick={onClick}
            >
                <CardContent
                    sx={{
                        height: '100%',
                        flexDirection: "row",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: 'center'
                        }}
                    >
                        <Icon
                            style={{
                                fontSize: "5rem",
                            }}
                        />
                        <Typography
                            fontSize="2.5rem"
                            fontWeight={800}
                        >
                            {name}
                        </Typography>
                    </div>
                </CardContent>
            </CardActionArea>
        </ColorCard>
    );
};

export default BigButton;

/*
<ColorCard
            color={color}
            sx={{
                width: '100%',
                height: '100%'
            }}
        >
            <CardActionArea>
                <CardContent>
                    <Typography>Click me!</Typography>
                </CardContent>
            </CardActionArea>
        </ColorCard>
*/