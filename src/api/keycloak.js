import Keycloak from "keycloak-js";

export const keycloakInstance = new Keycloak({
  url: 'http://localhost:8180/',
  realm: 'usager',
  clientId: 'frontend',
  onLoad: 'login-required'
});

export function InitKeycloakInstance() {

}