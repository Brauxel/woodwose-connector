import express from "express";
import { hydrateEnv } from "./utils/secrets";

// This function uses dotenv to import the .env file
hydrateEnv();

export const app = express();

// Setup the configuration for express
app.set("port", process.env.PORT || 3000);
