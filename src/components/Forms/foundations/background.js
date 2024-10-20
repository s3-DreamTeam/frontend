import ColorCard from "../../ComponentCards/foundation/styledCard";

export const FormBackground = ({ children }) => {
    return (
        <div
            style={{
                display: 'flex',
                flexGrow: 1,
                paddingX: '5%',
                paddingBottom: '10rem',
                paddingTop: '1rem',
                justifyContent: 'center',
            }}
        >
            <ColorCard
                sx={{
                    borderRadius: '1.5rem',
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column', // Use column for vertical layout
                    width: '100%',
                    maxWidth: '50rem',
                    alignItems: 'center',
                }}
            >
                {children}
            </ColorCard>
        </div>
    );
};