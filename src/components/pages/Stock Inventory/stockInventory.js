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
import { productManagerFormLossBuilder } from "../../../utils/formUtils/Forms/productManagerFormLoss";
import { ProductsLossToInventory } from "../../../api/requests/interface/ProductManager/Loss";
import store from "../../../store/store";
import { setProductInventoryData } from "../../../store/productInventorySlice";

let isFetching = false;

const StockInventory = () => {
    const [fullProduct, setFullProduct] = useState(null);
    const [fullTemplate, setFullTemplate] = useState(null);
    const [inForm, setInForm] = useState(false);
    const [inLoss, setInLoss] = useState(false);
    const [inAdd, setInAdd] = useState(false);

    const [cardTitle, setCardTitle] = useState(null);
    const [cardImage, setCardImage] = useState(null);
    const [quantity, setQuantity] = useState(null);
    const [cardVariant, setCardVariant] = useState(null);
    const [titleLoading, setTitleLoading] = useState(true);
    const [imageLoading, setImageLoading] = useState(true);
    const [footerLoading, setFooterLoading] = useState(true);
    const navigate = useNavigate();
    const productID = useSelector((state) => state.productManager.productManagerId);

    if (productID === null) {
        navigate(AppRoutes.Home);
    }

    HandleUserLoggedInStatus();

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
        setInAdd(false);
        setInLoss(false);
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
                store.dispatch(setProductInventoryData({
                    id: productID,
                    data: data
                }));
            }
        });
    }

    function newClicked() {
        setInAdd(true);
        setInLoss(false);
        setInForm(true);
    }

    function lossClicked() {
        setInAdd(false);
        setInLoss(true);
        setInForm(true);
    }

    function GetForm() {
        if (inAdd) {
            return (productManagerFormAddBuilder());
        }
        return (productManagerFormLossBuilder(quantity));
    }

    function API({
        packet,
        onStart = () => { },
        onEnd = () => { },
        onSuccess = () => { },
        onError = () => { },
    }) {
        if (inAdd) {
            console.log("NEW PRODUCTS ADDED");
            NewProductsAddedToInventory({
                packet: packet,
                onStart: onStart,
                onEnd: onEnd,
                onSuccess: onSuccess,
                onError: onError,
            });
        }
        else {
            console.log("PRODUCT LOST");
            ProductsLossToInventory({
                packet: packet,
                onStart: onStart,
                onEnd: onEnd,
                onSuccess: onSuccess,
                onError: onError,
            });
        }
    }

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
                        formObjectGetter={GetForm}
                        APIFormEndpoint={API}
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
                            onLossClick={lossClicked}
                            disabled={footerLoading}
                        />
                    </Manager>
                }
            >
            </PageLayout>
    );
};

export default StockInventory;