import { RoleModel } from "./RoleModel";

export interface UserModel {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  status: boolean;
  createdAt: string;
  updatedAt: string;
  role: RoleModel;
}