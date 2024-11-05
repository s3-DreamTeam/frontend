import CardDecorator from "../Decorator/decorator";

const SmallDecoratorsArea = ({ decorators, globalColor, size = 1 }) => {

    let height = String(2.5 * size) + 'rem';
    let margin = '-' + String(1.5 * size) + 'rem';

    return (
        <div
            style={{
                width: '100%',
                height: height,
                marginBottom: margin
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