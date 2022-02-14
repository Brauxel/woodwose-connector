import express from "express";
import googleSheetRouter from "./resources/google-sheet/googleSheet.router";
import { createGoogleSheetInstance } from "./utils/google-sheets";
import { hydrateEnv } from "./utils/secrets";
// import { SellingPartnerAPI } from "amazon-sp-api";
// import SellingPartnerAPI from "amazon-sp-api";
const SellingPartnerAPI = require("amazon-sp-api");

// This function uses dotenv to import the .env file
hydrateEnv();

const app = express();

// Setup the configuration for express
app.set("port", process.env.PORT || 3000);

// Google Sheet Routes
app.use("/api/google-sheet", createGoogleSheetInstance);
app.use("/api/google-sheet", googleSheetRouter);

app.get("/api/test", (req, res) => {
  console.log("hello");

  (async () => {
    try {
      const sellingPartner = new SellingPartnerAPI({
        region: "eu", // The region to use for the SP-API endpoints ("eu", "na" or "fe")
        refresh_token:
          "Atzr|IwEBIEdWL7kLuK655SfLkAA1XwzUgHFAF6Ie9Gb1cyKMqFhF0TDqnecqcx0U7pJjwq03PFeugjKYbbPp8LTxrUs-Nh0k_CBevW7GuWYW0-5DOAQ-gdnPPq9lRzOGJjtww--IFQ-M1vomIh_z4Humon3tvj4o4kNw3sc_JDo47uizg7bUKFJdkvuDn9CUBgqcQkqSJNOhWJ5gJqvs0SNsvZ22jQZEWawR8DGx6PuRLEv9LjE7R86wDnxvbN1WmBYvYYZPK6DEQRaVk87lVVWm1ZCCLHqsOryoA-Nkurr_rEnME9CW8SsLB6gsJBWouA2_uhAV_PM",
        credentials: {
          SELLING_PARTNER_APP_CLIENT_ID:
            "amzn1.application-oa2-client.93001914b914447396b571cf770ed280",
          SELLING_PARTNER_APP_CLIENT_SECRET:
            "64aea3daeeb80a93a27ad47317b8b040847cbfa719c70a1e37a2034447ccce19",
          AWS_ACCESS_KEY_ID: "AKIA5UZGHZU3YF4AKYWK",
          AWS_SECRET_ACCESS_KEY: "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",
          AWS_SELLING_PARTNER_ROLE:
            "arn:aws:iam::937993686327:role/SellingPartnerAPI",
        },
      });
      const res = await sellingPartner.callAPI({
        operation: "getOrderMetrics",
        endpoint: "sales",
        query: {
          MarketplaceId: "A1PA6795UKMFR9",
          interval: "2020-10-01T00:00:00-07:00--2020-10-01T20:00:00-07:00",
          granularity: "Hour",
        },
      });
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  })();

  res.status(200).end("Hello");
});

export default app;
