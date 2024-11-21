import { backendApi, BackendHeader } from "../../../backend";
import Endpoints from "../../../endpoints";

/**
 * # RealGetFullProductTemplate
 * See interface version for details
 */
export const RealGetFullProductTemplate = async ({
    ID,
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log(Endpoints.ProductTemplate.Get.Full + ": REQ: RealGetFullProductTemplate - SENT: ", ID);
    onStart();
    try {
        const header = BackendHeader();
        const response = await backendApi.post(
            Endpoints.ProductTemplate.Get.Full,
            ID,
            header
        );
        console.log(Endpoints.ProductTemplate.Get.Full + ": REQ: RealGetFullProductTemplate - GOTTEN: ", response.data);
        console.log(Endpoints.ProductTemplate.Get.Full + ": REQ: RealGetFullProductTemplate - EXPECTED: ", {
            "Product's Image": "text",
            "Manufacturer": "text",
            "Model": "text",
            "Consistency": "text",
            "Climate": "text",
            "Edible": true,
            "Fragile": true,
            "Color varies": true,
            "Has bar code": true,
            "Flavor varies": true,
            "Is packaged": true,
            "Can expire": true,
            "Shape": "text",
            "Width": "1",
            "Height": "2",
            "Length": "3",
            "Weight": "4",
            "TemplateID": 0,
        });

        onSuccess(response.data);
    } catch (err) {
        console.log(Endpoints.ProductTemplate.Get.Full + ": REQ: RealGetFullProductTemplate - ERROR: ", err.message);
        onError(err);
    } finally {
        onEnd();
    }
};