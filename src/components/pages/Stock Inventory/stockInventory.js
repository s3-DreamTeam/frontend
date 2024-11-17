import { useEffect, useState } from "react";
import HandleUserLoggedInStatus from "../../../utils/verifyLoggedIn";
import PageLayout from "../../pageLayout/pageLayout";
import Manager from "../Foundations/Managers/manager";
import { GetFullProductInInventory } from "../../../api/requests/interface/ProductInventory/getFull";
import { useSelector } from "react-redux";
import { GetFullProductTemplate } from "../../../api/requests/interface/ProductTemplates/getFull";
import ProductManagerCardFooter from "./CardFooter";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../../utils/routerRouteManager";
import ProductManagerPageFooter from "./PageFooter";
import InventoryFormFoundation from "./FormPage";
import { productManagerFormAddBuilder } from "../../../utils/formUtils/Forms/productManagerFormAdd";
import { NewProductsAddedToInventory } from "../../../api/requests/interface/ProductManager/Add";
import { GetSurfaceProductInInventory } from "../../../api/requests/interface/ProductInventory/getSurface";

let isFetching = false;

const StockInventory = () => {
    const [fullProduct, setFullProduct] = useState(null);
    const [fullTemplate, setFullTemplate] = useState(null);
    const [inForm, setInForm] = useState(false);

    const [cardTitle, setCardTitle] = useState(null);
    const [cardImage, setCardImage] = useState(null);
    const [quantity, setQuantity] = useState(null);
    const [cardVariant, setCardVariant] = useState(null);
    const [titleLoading, setTitleLoading] = useState(true);
    const [imageLoading, setImageLoading] = useState(true);
    const [footerLoading, setFooterLoading] = useState(true);
    const navigate = useNavigate();
    const productID = useSelector((state) => state.productManager.productManagerId);

    HandleUserLoggedInStatus();
    console.log("PRODUCT ID: ", productID);

    // - Fetch Necessary Informations - //
    useEffect(() => {
        if (!isFetching) {
            console.log("FETCHING ID ", productID);
            GetFullProductInInventory({
                ID: productID,
                onStart: () => {
                    isFetching = true;
                },
                onEnd: () => {
                    isFetching = false;
                    setImageLoading(false);
                    setFooterLoading(false);
                },
                onError: () => {

                },
                onSuccess: (data) => {
                    console.log("Successfully retreived the full product!");
                    console.log(data);
                    setFullProduct(data);
                    setCardImage(data["Product's Image"]);
                    setCardVariant(data.Variant);
                    setQuantity(data.Quantity);

                    GetFullProductTemplate({
                        ID: data.TemplateID,
                        onStart: () => {
                            isFetching = true;
                        },
                        onEnd: () => {
                            isFetching = false;
                        },
                        onError: (e) => {
                            console.log(e);
                        },
                        onSuccess: (data) => {
                            console.log("Got the full template!");
                            setFullTemplate(data);
                            setCardTitle(data.Manufacturer);
                            setTitleLoading(false);
                        }
                    });
                }
            });
        }
    }, [productID]);

    function cancelForm() {
        setInForm(false);
        GetSurfaceProductInInventory({
            ID: productID,
            onStart: () => {
                setFooterLoading(true);
            },
            onEnd: () => {
                setFooterLoading(false);
            },
            onError: () => {
                // :(
            },
            onSuccess: (data) => {
                console.log("GOT", data);
                setQuantity(data["Quantity"]);
            }
        });
    }

    function newClicked() {
        setInForm(true);
    }

    console.log("WHAT THE FUCK IS IT AT: ", inForm);
    return (
        inForm ?
            <PageLayout
                title="Doing product's inventory"
                hideActionBar={true}
                hasGoBackArrow={true}
                hideNavigationDrawer={true}
                onGoBack={() => {
                    setInForm(false);
                }}
                childrens={
                    <InventoryFormFoundation
                        itemID={fullProduct.id}
                        onCancel={cancelForm}
                        formObjectGetter={productManagerFormAddBuilder}
                        APIFormEndpoint={NewProductsAddedToInventory}
                        successDialogTitle="Success"
                        successDialogMessage="Quantity has been updated"
                    />
                }
            >
            </PageLayout>
            :
            <PageLayout
                title="Manager"
                hideActionBar={true}
                hasGoBackArrow={true}
                hideNavigationDrawer={true}
                onGoBack={() => {
                    navigate(AppRoutes.StockManager);
                }}
                childrens={
                    <Manager
                        name={cardTitle}
                        nameLoading={titleLoading}
                        image={cardImage}
                        imageLoading={imageLoading}
                        footerLoading={footerLoading}
                        CardFooter={
                            <ProductManagerCardFooter
                                variant={cardVariant}
                                inStock={quantity}
                            />
                        }
                    >
                        <ProductManagerPageFooter
                            onNewClick={newClicked}
                        />
                    </Manager>
                }
            >
            </PageLayout>
    );
};

export default StockInventory;