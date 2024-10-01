import { Chip } from "@mui/material";

const CardDecorator = ({ type, globalColor }) => {
    console.log(type.label);
    return (
        <Chip
            color={globalColor}
            label={type.label}
        />
    );
};

export default CardDecorator;