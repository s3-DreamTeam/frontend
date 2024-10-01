import Keycloak from "keycloak-js";

export const keycloakInstance = new Keycloak({
  url: process.env.REACT_APP_KEYCLOAK_URL,
  realm: 'usager',
  clientId: 'frontend',
  onLoad: 'login-required'
});

export function InitKeycloakInstance() {

}