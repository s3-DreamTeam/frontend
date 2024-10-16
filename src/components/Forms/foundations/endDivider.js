import StyledDivider from "../../divider/styledDivider";


export const EndDivider = () => {
    return (
        <>
            <div style={{ margin: '0.15rem' }} />
            <StyledDivider
                thiccness={1}
                orientation="horizontal"
                flexItem
            />
            <div style={{ margin: '0.25rem' }} />
        </>
    );
};