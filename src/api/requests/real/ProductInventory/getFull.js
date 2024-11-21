import { backendApi, BackendHeader } from "../../../backend";
import Endpoints from "../../../endpoints";

/**
 * # RealGetFullProductInInventory
 * See interface version for details
 */
export const RealGetFullProductInInventory = async ({
    ID,
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log("REQ: RealGetFullProductInInventory");
    onStart();
    try {
        const header = BackendHeader();
        const response = await backendApi.post(
            Endpoints.ProductInventory.Get.Full,
            ID,
            header
        );
        console.log("REQ: RealGetFullProductInInventory - GOTTEN : ", response.data);
        console.log("REQ: RealGetFullProductInInventory - EXPECTED : ", {
            "Product's Image": "text",
            "Variant": "text",
            "Profit Margin": "10",
            "Color": "#FF0000",
            "Flavor": "text",
            "Shelf Life": "365",
            "Bar code": "000000",
            "Min temperature": "-20",
            "Prefered": "20",
            "Max temperature": "20",
            "Allergies": "peanuts, gluten",
            "Calories": "3000",
            "Ingredients": "text",
            "TemplateID": 0,
            "Quantity": 0
        });

        onSuccess(response.data);
    } catch (err) {
        onError(err);
    } finally {
        onEnd();
    }
};