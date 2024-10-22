import { getRandomInt } from "./randomInt";

export const RandomErrorSimulator = () => {
    if (process.env.REACT_APP_SIMULATE_RANDOM_ERRORS === 'yes') {
        const value = getRandomInt(1, 100);
        if (value <= Number(process.env.REACT_APP_SIMULATE_RANDOM_ERRORS_PROBABILITY)) {
            console.warn("Error was simulated");
            throw new Error('SIMULATED ERROR');
        }
    }
};