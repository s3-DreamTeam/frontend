import { backendApi, BackendHeader } from "../../../backend";
import Endpoints from "../../../endpoints";

/**
 * # RealMachineManagerGet
 * See interface version for details
 */
export const RealMachineManagerGet = async ({
    ID,
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log("REQ: RealMachineManagerGet - ID: ", ID);
    onStart();
    try {
        const header = BackendHeader();
        const response = await backendApi.post(
            Endpoints.MachineInventory.Manage.Get,
            ID,
            header
        );
        console.log("REQ: RealMachineManagerGet - GOTTEN: ", response.data);
        console.log("REQ: RealMachineManagerGet - EXPECTED : ", [
            {
                "Slot": "A2",
                "ProductID": 0,
                "Quantity": 0,
                "Price": 0
            },
            {
                "Slot": "A3",
                "ProductID": 0,
                "Quantity": 0,
                "Price": 0
            },
            {
                "Slot": "A4",
                "ProductID": 0,
                "Quantity": 0,
                "Price": 0
            }
        ]);
        onSuccess(response.data);
    } catch (err) {
        onError(err);
    } finally {
        onEnd();
    }
};