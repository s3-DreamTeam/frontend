import ColorCard from "../../ComponentCards/foundation/styledCard";

export const FormBackground = ({ children }) => {
    return (
        <div
            style={{
                display: 'flex',
                flexGrow: 1,
                padding: '5%'
            }}
        >
            <ColorCard
                sx={{
                    borderRadius: '1.5rem',
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column', // Use column for vertical layout
                    width: '100%',
                    alignItems: 'center', // Center children
                }}
            >
                {children}
            </ColorCard>
        </div>
    );
};