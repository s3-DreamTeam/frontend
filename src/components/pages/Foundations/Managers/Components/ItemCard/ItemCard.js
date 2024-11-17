import TopManagerCard from "../../Containers/topCards";
import ItemCardFooter from "./ItemCardFooter";
import ItemCardImage from "./ItemCardImage";
import ItemCardName from "./ItemCardName";

const ItemCard = ({
    name = "DEFAULT",
    image = null,
    color = null,
    Footer = null,
    imageLoading = false,
    footerLoading = false,
    nameLoading = false
}) => {
    return (
        <TopManagerCard
            maxWidth="25rem"
            minWidth="25rem"
            color={color}
        >
            <div
                style={{
                    padding: '2rem',
                    height: '100%'
                }}
            >
                <ItemCardName
                    text={name}
                    loading={nameLoading}
                />
                <ItemCardImage
                    image={image}
                    loading={imageLoading}
                />
                <ItemCardFooter
                    Footer={Footer}
                    loading={footerLoading}
                />
            </div>
        </TopManagerCard>
    );
};

export default ItemCard;