import express from "express";
import combineInventorySheetRouter from "./resources/combine-inventory/combineInventory.router";
import { createGoogleSheetInstance } from "./resources/google-sheet/googleSheet.controller";
import googleSheetRouter from "./resources/google-sheet/googleSheet.router";
import { hydrateEnv } from "./utils/secrets";

// This function uses dotenv to import the .env file
hydrateEnv();

const app = express();

// Setup the configuration for express
app.set("port", process.env.PORT || 3000);

// Google Sheet Routes
app.use("/api/google-sheet", createGoogleSheetInstance);
app.use("/api/google-sheet", googleSheetRouter);

// Combine Inventory Routes
app.use("/api/combine-inventory", createGoogleSheetInstance);
app.use("/api/combine-inventory", combineInventorySheetRouter);

export default app;
