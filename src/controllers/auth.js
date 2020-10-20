import { AccountModel } from '../models';

export class AuthController {
  static currentAccount = new AccountModel();
  static isAuthenticated = false;
}