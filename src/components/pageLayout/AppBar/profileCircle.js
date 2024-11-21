import { Typography } from "@mui/material";
import ColorCard from "../../ComponentCards/foundation/styledCard";

const ProfileCircle = ({ firstname, lastname }) => {
    const firstLetter = firstname[0].toUpperCase();
    const lastLetter = lastname[0].toUpperCase();

    return (
        <ColorCard
            colorvariant="secondary"
            sx={{
                display: 'flex',
                padding: '0.5rem',
                borderRadius: '1.5rem',
                width: '2.5rem',
                height: '2.5rem',
                minWidth: '2.5rem',
                minHeight: '2.5rem',
                justifyContent: 'center',
                alignItems: 'center',
                justifyItems: 'center',
                alignContent: 'center'
            }}
        >
            <Typography
                align="center"
                fontWeight={800}
                sx={{
                    margin: '0',
                    padding: '0',
                    paddingTop: '0.1rem'
                }}
            >
                {`${firstLetter}${lastLetter}`}
            </Typography>
        </ColorCard>
    );
};

export default ProfileCircle;