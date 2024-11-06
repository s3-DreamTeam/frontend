import { RealHealthCheck } from "../../real/Testing/health";
import { SimulatedHealthCheck } from "../../simulated/Testing/health";
import { isSimulated } from "../isSimulated";

/**
 * # FetchBackendTest
 * Gets a string that the backend wants to display for testing purposes.
 * @param {*} param0 
 */
export const HealthCheck = async ({
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    if (isSimulated()) {
        SimulatedHealthCheck({
            onSuccess: onSuccess,
            onError: onError,
            onEnd: onEnd,
            onStart: onStart
        });
    } else {
        RealHealthCheck({
            onSuccess: onSuccess,
            onError: onError,
            onEnd: onEnd,
            onStart: onStart
        });
    }
};