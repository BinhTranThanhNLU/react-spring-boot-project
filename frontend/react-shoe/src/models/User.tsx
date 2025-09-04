import { Role } from "./Role";

export interface User {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  status: boolean;
  createdAt: string;
  updatedAt: string;
  role: Role;
}