import { AccountModel } from '../models';
import { HttpProvider } from '../providers';

export class AuthController {
  static currentAccount = new AccountModel();
  static isAuthenticated = false;
  static hasLoaded = false;

  static setAccount(accountData) {
    AuthController.currentAccount.id = accountData.id;
    AuthController.currentAccount.firstName = accountData.firstName;
    AuthController.currentAccount.lastName = accountData.lastName;
    AuthController.currentAccount.email = accountData.email;
    AuthController.currentAccount.type = accountData.accountType;
    AuthController.currentAccount.token = accountData.token;
    AuthController.isAuthenticated = true;
    localStorage.setItem('token', accountData.token);
    HttpProvider.setHeaderToken(accountData.token);
  }
}
