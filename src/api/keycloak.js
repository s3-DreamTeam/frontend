import Keycloak from "keycloak-js";

export const keycloakInstance = new Keycloak({
  url: process.env.REACT_APP_KEYCLOAK_URL,
  realm: 'usager',
  clientId: 'frontend',
  onLoad: 'login-required'
});

let initialized = false;
export function InitKeycloakInstance({
  onSuccess = null,
  onFatalError = null,
  onInitError = null,
  onFinally = null,
}) {
  if (initialized) return;
  initialized = true;

  try {
    keycloakInstance.init({ onLoad: 'login-required' }).then(auth => {
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