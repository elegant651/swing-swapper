import * as UAuthWeb3Modal from "@uauth/web3modal";
import UAuthSPA from "@uauth/js";

export const uauthOptions = {
  clientID: "client_id",
  redirectUri: "http://localhost:3000",

  // Must include both the openid and wallet scopes.
  scope: "openid wallet",
};

export const providerOptionsWithUnstop = {
  "custom-uauth": {
    // The UI Assets
    display: UAuthWeb3Modal.display,

    // The Connector
    connector: UAuthWeb3Modal.connector,

    // The SPA libary
    package: UAuthSPA,

    // The SPA libary options
    options: uauthOptions,
  },
};
