import TopManagerCard from "../../Containers/topCards";
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
                }}
            >
                <ItemCardName
                    text={name}
                    loading={nameLoading}
                />
            </div>
        </TopManagerCard>
    );
};

export default ItemCard;