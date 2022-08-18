import { google } from "googleapis";
import { GoogleAuth } from "googleapis-common";

export const createAuthClient = async () => {
  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: "keys.json",
      scopes: "https://www.googleapis.com/auth/spreadsheets",
    });

    return auth;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create google sheet instance");
  }
};

export const createGoogleInstance = async (auth: GoogleAuth) => {
  try {
    const authClientObject = await auth.getClient();

    const googleSheetsInstance = google.sheets({
      version: "v4",
      auth: authClientObject,
    });

    return googleSheetsInstance;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create google instance");
  }
};
