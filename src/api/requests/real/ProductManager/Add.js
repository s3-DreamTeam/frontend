import { backendApi, BackendHeader } from "../../../backend";
import Endpoints from "../../../endpoints";

/**
 * # RealNewProductInInventory
 * See interface version for details
 */
export const RealNewProductsAddedToInventory = async ({

    packet,

    onSuccess = () => { },
    onError = () => { },
    onEnd = () => { },
    onStart = () => { }
}) => {
    console.log(Endpoints.ProductInventory.Manage.Add + ": REQ: RealNewProductsAddedToInventory - SENDING: ", packet);
    onStart();
    try {
        //await sleep(5000);
        const header = BackendHeader();
        await backendApi.post(
            Endpoints.ProductInventory.Manage.Add,
            packet,
            header
        );
        onSuccess();
    } catch (err) {
        console.log(Endpoints.ProductInventory.Manage.Add + ": REQ: RealNewProductsAddedToInventory - ERROR: ", err.message);
        onError(err);
    } finally {
        onEnd();
    }
};














/*
function puissance_mod(b,e,m) {
    return (b^e) % m
}

function Miller_Rabin(n) {
    if(n === 2) { 
        return (false);
    }

    if((n < 3) || (n % 2 === 0)) {
            return (false);
    } //n'est trop petit ou pair

    let w = n-1; 
    let k = 0;

    while (w % 2 === 0) {
        w = w/2; 
        k = k+1;
    } // 2k est facteur de n−1

    let essais = 0;
    while (essais < 64) { // 64 succes = prob . 2^{−128} d’erreur

        let a = Math.floor(2 + (n - 3) * Math.random()); // 2 ≤ a < n − 1

        let temp = puissance_mod(a, w, n); // Calcul de a^w (mod n)

        if(temp !== 1) { // Serie de 1 ne commence pas
            let r = 0;      // au tout debut

            while (temp !== n - 1) { // Recherche du residu (n−1)
                if(r === k - 1) { // Avant−dernier element
                    return (false);
                }
                else {
                    temp = puissance_mod(temp, 2, n); // Mise au carre (mod n)
                    r = r + 1;
                }
                }
            }
        essais = essais + 1;
    }
    return (false);
}

// TRUE : nombre pas premier, FALSE: Nombre premier
// 1. Pas bother pour des nombres en bas de 3 ou pair
// 2
*/