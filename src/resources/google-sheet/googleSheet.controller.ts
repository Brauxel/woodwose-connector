import { NextFunction, Request, Response } from "express";
import {
  createAuthClient,
  createGoogleInstance,
} from "../../utils/google-sheets";

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

/**
 * Google Sheet
 * @route GET /api/google-sheet
 */
export const getGoogleSheet = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { googleSheetsInstance } = res.locals;
    const { id: spreadsheetId } = req.params;
    const { range } = req.query;

    const readData = await googleSheetsInstance.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    res.status(200).json({
      data: readData.data.values,
    });
  } catch (error) {
    res.status(404).send({ error: "Not found" });
  }
};

/**
 * Google Sheet
 * @route POST /api/google-sheet
 */
export const postGoogleSheet = async (
  _: Request,
  res: Response
): Promise<void> => {
  res.status(200).json({
    data: "Hello from POST Google Sheet",
  });
};

/**
 * Google Sheet
 * @route PUT /api/google-sheet
 */
export const putGoogleSheet = async (
  _: Request,
  res: Response
): Promise<void> => {
  res.status(200).json({
    data: "Hello from PUT Google Sheet",
  });
};
