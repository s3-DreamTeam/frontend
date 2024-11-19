import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import HandleUserLoggedInStatus from "../../../utils/verifyLoggedIn";
import { GetFullMachineInInventory } from "../../../api/requests/interface/MachineInventory/getFull";
import { GetFullMachineTemplate } from "../../../api/requests/interface/MachineTemplates/getFull";
import { GetSurfaceMachineInInventory } from "../../../api/requests/interface/MachineInventory/getSurface";
import { setMachineInventoryData } from "../../../store/machineInventorySlice";
import store from "../../../store/store";
import { productManagerFormAddBuilder } from "../../../utils/formUtils/Forms/productManagerFormAdd";
import { productManagerFormLossBuilder } from "../../../utils/formUtils/Forms/productManagerFormLoss";
import { NewProductsAddedToInventory } from "../../../api/requests/interface/ProductManager/Add";
import { ProductsLossToInventory } from "../../../api/requests/interface/ProductManager/Loss";
import PageLayout from "../../pageLayout/pageLayout";
import InventoryFormFoundation from "../Stock Inventory/FormPage";
import { AppRoutes } from "../../../utils/routerRouteManager";
import Manager from "../Foundations/Managers/manager";
import ProductManagerCardFooter from "../Stock Inventory/CardFooter";
import { MachineManagerGet } from "../../../api/requests/interface/MachineManager/get";
import MachineInventoryPageFooter from "./pageFooter";
import SelectComponentFromStoreDialog from "../../Dialogs/SelectComponentFromStoreDialog";
import { LoadUsersProductInventory } from "../../../utils/ComplexStoreManagers/ProductInventory/load";
import ProductInventoryComponentCard from "../../ComponentCards/productInventoryCard";
import ErrorDialog from "../../Dialogs/ErrorDialog";
import { MachineManagerSet } from "../../../api/requests/interface/MachineManager/set";
import { MachineManagerReset } from "../../../api/requests/interface/MachineManager/reset";
import QuestionDialog from "../../Dialogs/QuestionDialog";

let isFetching = false;

const MachineInventoryPage = () => {
    const [fullMachine, setFullMachine] = useState(null);
    const [fullTemplate, setFullTemplate] = useState(null);
    const [fullInventory, setFullInventory] = useState(null);

    const [inForm, setInForm] = useState(false);
    const [inLoss, setInLoss] = useState(false);
    const [inAdd, setInAdd] = useState(false);

    const [productSelectionShown, setProductSelectionShown] = useState(false);
    const [quantityWarningShown, setQuantityWarningShown] = useState(false);
    const [resetDialogShown, setResetDialogShown] = useState(false);

    const [cardTitle, setCardTitle] = useState(null);
    const [cardTitleError, setCardTitleError] = useState(false);
    const [titleLoading, setTitleLoading] = useState(true);

    const [selectedSlot, setSelectedSlot] = useState(null);

    const [quantity, setQuantity] = useState(0);

    const [cardImage, setCardImage] = useState(null);
    const [cardImageError, setCardImageError] = useState(false);
    const [imageLoading, setImageLoading] = useState(true);

    const [productLoading, setProductLoading] = useState(false);
    const products = useSelector((state) => state.productInventorySlice.productInventory);

    const [footerLoading, setFooterLoading] = useState(true);
    const [inventoryLoading, setInventoryLoading] = useState(true);
    const [inventoryError, setInventoryError] = useState(true);
    const machineID = useSelector((state) => state.machineManager.machineManagerId);
    const navigate = useNavigate();

    HandleUserLoggedInStatus();

    // - Fetch Necessary Informations - //
    useEffect(() => {
        if (!isFetching) {
            GetFullMachine();
        }
    }, [machineID]);

    function GetFullMachine() {
        if (!isFetching) {
            console.log("FETCHING FULL MACHINE IN INVENTORY DATA, with ID: ", machineID);
            GetFullMachineInInventory({
                ID: machineID,
                onStart: () => {
                    isFetching = true;
                    setTitleLoading(true);
                    setImageLoading(true);
                    GetFullInventory(machineID, true);

                    setCardTitleError(null);
                    setCardImageError(null);
                },
                onEnd: () => {
                    isFetching = false;
                    setImageLoading(false);
                    setTitleLoading(false);
                },
                onError: (e) => {
                    setCardTitleError(e.message);
                    setCardImageError(true);
                },
                onSuccess: (data) => {
                    console.log("Successfully retreived the full machine! - ", data);
                    setFullMachine(data);
                    setCardImage(data["Machine's Image"]);
                    setCardTitle(data.Name);
                    setQuantity(data.Quantity);

                    GetFullTemplate(data.TemplateID);
                }
            });
        }
    }

    function GetFullTemplate(id) {
        GetFullMachineTemplate({
            ID: id,
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
                console.log("Got the full template of the machine! - ", data);
                setFullTemplate(data);
                setCardTitle(data.Manufacturer);
                setTitleLoading(false);
            }
        });
    }

    function GetFullInventory(id, showLoading) {
        console.log("Getting the full inventory!");
        MachineManagerGet({
            ID: id,
            onStart: () => {
                setInventoryLoading(showLoading);
                setInventoryError(null);
            },
            onEnd: () => {
                setInventoryLoading(false);
            },
            onError: (e) => {
                console.error(e);
                setInventoryError(e.message);
            },
            onSuccess: (data) => {
                console.log("Got the full inventory of the machine! - ", data);
                setFullInventory(data);
            }
        });
    }


    function cancelForm() {
        setInForm(false);
        setInAdd(false);
        setInLoss(false);
        GetSurfaceMachineInInventory({
            ID: machineID,
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
                console.log("SURFACE GOT: ", data);
                store.dispatch(setMachineInventoryData({
                    id: machineID,
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
        return (productManagerFormLossBuilder(0));
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

    // - Product Loading handling - //
    function LoadProducts({
        onStart = () => { },
        onEnd = () => { },
        onSuccess = () => { },
        onError = () => { },
    }) {
        LoadUsersProductInventory({
            onStart: () => {
                setProductLoading(true);
                onStart();
            },
            onEnd: () => {
                setProductLoading(false);
                onEnd();
            },
            onSuccess: () => {
                onSuccess();
            },
            onError: (e) => {
                onError(e.message);
            },
        });
    }

    // - Slot click handling - //
    function onSet(slot) {
        console.log("ON SET HAS BEEN CLICKED");
        setSelectedSlot(slot);
        setProductSelectionShown(true);

        LoadProducts({
            onStart: () => {
                setInventoryLoading(true);
            },
            onEnd: () => {
                setInventoryLoading(false);
            },
            onSuccess: () => {
            },
            onError: (e) => {
            },
        });
    }

    function onAdd(slot) {

    }

    function onRemove(slot) {
    }

    function onReset(slot) {
        console.log("A slot clicked on reset: ", slot);
        setSelectedSlot(slot);
        setResetDialogShown(true);
    }

    // - Loading animation - //
    function setToLoading(slot) {
        let inventory = [...fullInventory]; // Create a shallow copy of the array
        let index = inventory.findIndex(item => item.Slot === slot.Slot);

        if (index !== -1) {
            console.warn("SHOULD BE IN LOADING STATE");
            // Create a new object for the matching item
            inventory[index] = {
                ...inventory[index], // Copy existing properties
                loading: true,       // Add or update the "loading" property
            };
        }

        setFullInventory(inventory);
    }

    // - Product Selection Handling - //
    function SelectedAProduct(product) {
        console.log("User has chosen the following product for the current slot: ", product);
        setProductSelectionShown(false);
        if (product.Quantity === 0) {
            setQuantityWarningShown(true);
        }

        MachineManagerSet({
            packet: {
                "id": machineID,
                "Slot": selectedSlot.Slot,
                "ProductID": product.id,
            },
            onStart: () => {
                setToLoading(selectedSlot);
            },
            onEnd: () => {
            },
            onError: () => {

            },
            onSuccess: () => {
                GetFullInventory(machineID, false);
            }
        });
    }

    function WantsToResetSlot() {
        MachineManagerReset({
            packet: {
                "id": machineID,
                "Slot": selectedSlot.Slot
            },
            onStart: () => {
                setToLoading(selectedSlot);
            },
            onEnd: () => {
            },
            onSuccess: () => {
                console.log("Success! Now gonna reload the inventory.");
                GetFullInventory(machineID, false);
            },
            onError: (e) => {
                setInventoryError(e.message);
            },
        });
    }

    // - Retry getting inventory - //
    function RetryGettingInventory() {
        GetFullInventory(machineID, true);
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
                        itemID={fullMachine.id}
                        onCancel={cancelForm}
                        formObjectGetter={GetForm}
                        APIFormEndpoint={API}
                        successDialogTitle="Success"
                        successDialogMessage="Has been updated"
                    />
                }
            >
            </PageLayout>
            :
            <>
                <PageLayout
                    title="Manager"
                    hideActionBar={true}
                    hasGoBackArrow={true}
                    hideNavigationDrawer={true}
                    onGoBack={() => {
                        navigate(AppRoutes.MachineManager);
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
                                    variant="cardVariant"
                                    inStock={quantity}
                                />
                            }
                        >
                            <MachineInventoryPageFooter
                                loading={inventoryLoading}
                                errors={inventoryError}
                                inventory={fullInventory}
                                machine={fullMachine}
                                template={fullTemplate}
                                onAdd={onAdd}
                                onRemove={onRemove}
                                onReset={onReset}
                                onSet={onSet}
                                onRetry={RetryGettingInventory}
                            />
                        </Manager>
                    }
                >
                </PageLayout>
                <SelectComponentFromStoreDialog
                    onClose={() => { setProductSelectionShown(false); }}
                    onConfirm={SelectedAProduct}
                    title={"No products"}
                    message={"You have no products to choose from"}
                    components={products}
                    ComponentCard={ProductInventoryComponentCard}
                    open={productSelectionShown}
                    loading={productLoading}
                />
                <ErrorDialog
                    onClose={() => {
                        setQuantityWarningShown(false);
                    }}
                    title="Quantity Warning"
                    message="You selected a product that you DON'T currently have in stock! You won't be able to add any until you have some left in stock."
                    open={quantityWarningShown}
                />
                <QuestionDialog
                    onClose={() => {
                        setResetDialogShown(false);
                    }}
                    onConfirm={() => {
                        setResetDialogShown(false);
                        WantsToResetSlot();
                    }}
                    title="Are you sure?"
                    message="This slot will be liberated, the products currently in it will go back in your stock inventory."
                    open={resetDialogShown}
                />
            </>
    );
};

export default MachineInventoryPage;