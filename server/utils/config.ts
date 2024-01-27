import { config } from "dotenv";

config();

export const PORT : any = process.env.PORT || 3000;
export const DB_PASSWORD  = <string>process.env.DB_PASSWORD;
export const DB_DEV_NAME = <string>process.env.DB_DEV_NAME
export const DB_TEST_NAME = <string>process.env.DB_TEST_NAME
export const DB_USER = <string>process.env.DB_USER
export const NODE_ENV : any= process.env.NODE_ENV
export const JWT_SECRET = <string>process.env.JWT_SECRET
export const PUBLIC_URL= <string> process.env.PUBLIC_URL