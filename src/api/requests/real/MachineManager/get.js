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
    console.log(Endpoints.MachineInventory.Manage.Get + ": REQ: RealMachineManagerGet - ID: ", ID);
    onStart();
    try {
        const header = BackendHeader();
        const response = await backendApi.post(
            Endpoints.MachineInventory.Manage.Get,
            ID,
            header
        );

        const technicalDebt_parsedObject = removeNegativeIDs(response.data);

        console.log(Endpoints.MachineInventory.Manage.Get + ": REQ: RealMachineManagerGet - GOTTEN: ", response.data);
        console.log(Endpoints.MachineInventory.Manage.Get + ": REQ: RealMachineManagerGet - EXPECTED : ", [
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
        console.log(Endpoints.MachineInventory.Manage.Get + ": REQ: RealMachineManagerGet - ERROR: ", err.message);
        onError(err);
    } finally {
        onEnd();
    }
};

function removeNegativeIDs(array) {

}