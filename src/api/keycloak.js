import Keycloak from "keycloak-js";

/**
 * # keycloakInstance
 * The instance of the Keycloak used to auth the user and fetch their JWT tokens.
 * Must be initialized **once** with `InitKeycloakInstance()`.
 */
let actualKeycloakInstance = new Keycloak({
  url: process.env.REACT_APP_KEYCLOAK_URL,
  realm: 'usager',
  clientId: 'frontend',
  onLoad: 'login-required'
});

let initialized = false;

export function keycloakInstance() {
  return actualKeycloakInstance;
}

/**
 * # InitKeycloakInstance
 * Initialises the instance of Keycloak. Must be done as soon as the frontend is
 * launched by the user. Will only execute once even if recalled after, but doing
 * that should raise the proper error callback.
 *
 * ---
 * @export
 * @param {*} {
 *   onSuccess = null,
 *   onFatalError = null,
 *   onInitError = null,
 *   onFinally = null,
 * }
 * @return {*} 
 */
export function InitKeycloakInstance({
  onSuccess = null,
  onFatalError = null,
  onInitError = null,
  onFinally = null,
}) {
  if (initialized) return;
  initialized = true;

  try {
    actualKeycloakInstance.init({ onLoad: 'login-required' }).then(auth => {
      onSuccess(auth);
    }).catch(error => {
      onInitError(error);
    }).finally(() => {
      onFinally();
    });
  } catch (error) {
    onFatalError(error);
  }
}