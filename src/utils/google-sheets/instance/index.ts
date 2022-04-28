import { NextFunction, Request, Response } from "express";
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

export const createGoogleSheetInstance = async (
  _: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const auth = await createAuthClient();

    try {
      const googleSheetsInstance = await createGoogleInstance(auth);
      res.locals.googleSheetsInstance = googleSheetsInstance;
      next();
    } catch (error) {
      console.error(error);
      return res
        .status(401)
        .json({ message: "Could not create google sheet instance" });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(401)
      .json({ message: "Could not authenticate with your credentials" });
  }
};
