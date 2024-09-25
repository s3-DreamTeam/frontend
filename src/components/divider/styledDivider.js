
import { Divider, styled } from '@mui/material';

/**
 * Redefinition of the regular MUI divider, but this one adds a bonus parameter that
 * allows custom thiccness.
*/
const StyledDivider = styled(Divider)(({ thiccness, orientation }) => ({
    ...(thiccness !== undefined &&
        (orientation === 'vertical'
            ? { borderRightWidth: thiccness }
            : { borderBottomWidth: thiccness }))
}));
export default StyledDivider;