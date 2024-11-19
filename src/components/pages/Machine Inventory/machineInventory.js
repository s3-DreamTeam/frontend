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
import ProductManagerPageFooter from "../Stock Inventory/PageFooter";
import { MachineManagerGet } from "../../../api/requests/interface/MachineManager/get";
import MachineInventoryPageFooter from "./pageFooter";

let isFetching = false;

const MachineInventoryPage = () => {
    const [fullMachine, setFullMachine] = useState(null);
    const [fullTemplate, setFullTemplate] = useState(null);
    const [fullInventory, setFullInventory] = useState(null);

    const [inForm, setInForm] = useState(false);
    const [inLoss, setInLoss] = useState(false);
    const [inAdd, setInAdd] = useState(false);

    const [cardTitle, setCardTitle] = useState(null);
    const [cardTitleError, setCardTitleError] = useState(false);
    const [titleLoading, setTitleLoading] = useState(true);

    const [quantity, setQuantity] = useState(0);

    const [cardImage, setCardImage] = useState(null);
    const [cardImageError, setCardImageError] = useState(false);
    const [imageLoading, setImageLoading] = useState(true);

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
                    GetFullInventory(machineID);

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

    function GetFullInventory(id) {
        MachineManagerGet({
            ID: id,
            onStart: () => {
                setInventoryLoading(true);
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
                        />
                    </Manager>
                }
            >
            </PageLayout>
    );
};

export default MachineInventoryPage;