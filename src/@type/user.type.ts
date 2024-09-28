export enum UserRoles {
  ADMIN = "ADMIN",
  STAFF = "STAFF",
  MEMBER = "MEMBER",
}

export enum RegisterType {
  SYSTEM = "SYSTEM",
  GOOGLE = "GOOGLE",
}

export enum UserStatus {
  VERIFIED = "VERIFIED",
  UNVERIFIED = "UNVERIFIED",
  RESTRIECTED = "RESTRICTED",
  BANNED = "BANNED",
  REMOVED = "REMOVED",
}

export interface User {
  id: string;
  username: string;
  email: string;
  role: UserRoles;
  status: UserStatus;
  avatar: string;
  typeRegister: RegisterType;
  rate: number;
  reputation: number;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
}

export interface Token{
  accessToken: string;
  refreshToken: string;
}
