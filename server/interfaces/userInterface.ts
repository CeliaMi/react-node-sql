import { Model } from "sequelize";

export interface UserAttributes {
    id?: number;
    name: string;
    email: string,
    password: string;
    role?: string,
}

export interface UserData {
    id?: number;
    name: string;
    email: string,
    role?: string,
}

export interface SesionData{
    token: string;
    user?: UserData;
}

export type newUser = Omit<UserAttributes, 'id'>

