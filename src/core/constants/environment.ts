import { LogLevel } from "@prisma/client/runtime/library";
import * as dotenv from "dotenv";

dotenv.config();

export const APP_PORT = process.env.PORT || 44044;
export const APP_ORIGIN = process.env.APP_ORIGIN;
export const APP_VERSION = process.env.APP_VERSION;
export const APPLICATION_NAME = process.env.APPLICATION_NAME;
export const DB_LOG_LEVEL = (process.env.DB_LOG_LEVEL || "query").split(
  ","
) as LogLevel[];
export const SECRET_KEY = process.env.SECRET_KEY;
