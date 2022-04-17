import express from "express";
import googleSheetRouter from "./resources/google-sheet/googleSheet.router";
import { createGoogleSheetInstance } from "./utils/google-sheets";
import { hydrateEnv } from "./utils/secrets";
import { getInventory } from "./utils/wordpress";

// This function uses dotenv to import the .env file
hydrateEnv();

const app = express();

// Setup the configuration for express
app.set("port", process.env.PORT || 3000);

// Google Sheet Routes
app.use("/api/google-sheet", createGoogleSheetInstance);
app.use("/api/google-sheet", googleSheetRouter);

getInventory();

export default app;
