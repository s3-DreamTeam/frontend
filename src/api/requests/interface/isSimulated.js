import store from "../../../store/store";

export function isSimulated() {
    const simulated = getValueFromStore();
    return (simulated);
}


const getValueFromStore = () => {
    const state = store.getState();
    const productTemplates = state.simulatedEndpointSlice.simulated;
    return productTemplates;
};