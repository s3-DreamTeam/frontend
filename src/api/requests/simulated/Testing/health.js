/**
 * # SimulatedHealthCheck
 * Gets a string that the backend wants to display for testing purposes.
 * @param {*} param0 
 */
export const SimulatedHealthCheck = async ({
    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log("REQ: SimulatedHealthCheck");
    onStart();
    onSuccess();
    onEnd();
};