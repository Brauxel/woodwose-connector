import { Request, Response } from "express";

/**
 * Google Sheet
 * @route GET /api/google-sheet
 */
export const getGoogleSheet = async (
  _: Request,
  res: Response
): Promise<void> => {
  res.status(200).json({
    data: "Hello from GET Google Sheet",
  });
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
