import { getRandomInt } from "./randomInt";
import { sleep } from "./sleep";

export async function WaitSimulator() {
    if (process.env.REACT_APP_SIMULATE_ENDPOINTS === 'yes') {
        const value = getRandomInt(Number(process.env.REACT_APP_SIMULATE_MIN_WAIT), Number(process.env.REACT_APP_SIMULATE_MAX_WAIT));
        console.warn("waiting for ", value);
        await sleep(value);
    }
};