import {
  PublicClientApplication,
  InteractionType,
  EventType,
} from "@azure/msal-browser";
import { loginRequest, msalConfig } from "./authConfig";
import {
  MsalProvider,
  useIsAuthenticated,
  MsalAuthenticationTemplate,
} from "@azure/msal-react";
import { createContext } from "react";

class AzureService {
  static msalInstance = new PublicClientApplication(msalConfig);

  static login = async () => {
    let response = null;
    try {
      response = await this.msalInstance.loginPopup(loginRequest);
    } catch (e) {
      response = await this.msalInstance.loginRedirect(loginRequest);
    }
    response ?? this.msalInstance.setActiveAccount(response);
    return response;
  };

  static logout = async () => {
    try {
      response = await this.msalInstance.logoutPopup(loginRequest);
    } catch (e) {
      response = await this.msalInstance.logoutRedirect(loginRequest);
    }
  };

  static getAccountInfo = () => {
    const account = this.msalInstance.getActiveAccount();

    this.msalInstance.setActiveAccount(account);
    return account;
  };

  static getAccessToken = async () => {
    const account = this.msalInstance.getActiveAccount();
    let response;
    try {
      try {
        response = await this.msalInstance.acquireTokenSilent({
          ...loginRequest,
          account,
        });
      } catch (err) {
        response = await this.msalInstance.acquireTokenPopup({
          ...loginRequest,
          account,
        });
      }
    } catch (err) {
      response = await this.msalInstance.acquireTokenRedirect({
        ...loginRequest,
        account,
      });
    }

    return response.accessToken;
  };

  static init = async () => {
    this.getAccountInfo();

    this.msalInstance.addEventCallback((event) => {
      if (
        event.eventType === EventType.LOGIN_SUCCESS &&
        event.payload.account
      ) {
        const account = event.payload.account;
        this.msalInstance.setActiveAccount(account);
      }
    });
  };

  static isAuth = () => {
    return useIsAuthenticated();
  };
}

let contextValue = {
  login: AzureService.login,
  logout: AzureService.logout,
  getAccessToken: AzureService.getAccessToken,
  isAuth: AzureService.isAuth,
  init: AzureService.init,
  getAccountInfo: AzureService.getAccountInfo,
};

export const AzureContext = createContext();

export function AzureProvider({ children }) {
  AzureService.init();
  return (
    <MsalProvider instance={AzureService.msalInstance}>
      <AzureContext.Provider value={contextValue}>
        {children}
      </AzureContext.Provider>
    </MsalProvider>
  );
}

export const AzureGuard = ({ children }) => (
  <MsalAuthenticationTemplate interactionType={InteractionType.Redirect}>
    {children}
  </MsalAuthenticationTemplate>
);
