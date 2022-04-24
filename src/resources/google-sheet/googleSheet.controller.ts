import { Request, Response } from "express";
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
