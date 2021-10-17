import express from "express";
import googleSheetRouter from "./resources/google-sheet/googleSheet.router";
import { hydrateEnv } from "./utils/secrets";

// This function uses dotenv to import the .env file
hydrateEnv();

const app = express();

// Setup the configuration for express
app.set("port", process.env.PORT || 3000);

// Google Sheet Routes
app.use("/api/google-sheet", googleSheetRouter);

export default app;
