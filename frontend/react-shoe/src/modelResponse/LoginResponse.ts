import { UserModel } from "../models/UserModel";

export interface LoginResponse {
  token: string;
  user: UserModel;
}
