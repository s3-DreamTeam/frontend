import CardDecorator from "../Decorator/decorator";

const SmallDecoratorsArea = ({ decorators, globalColor }) => {
    return (
        <div
            style={{
                width: '100%',
                height: '2.5rem',
                marginBottom: '-1.5rem'
            }}
        >
            {decorators.map((decorator, index) => (
                <CardDecorator
                    globalColor={globalColor}
                    type={decorator}
                    key={index}
                />
            ))}
        </div>
    );
};

export default SmallDecoratorsArea;