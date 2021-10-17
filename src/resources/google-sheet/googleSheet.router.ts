import { Router } from "express";

const googleSheetRouter = Router();

/**
 * Google Sheet
 * @route GET /api/google-sheet
 */
googleSheetRouter.route("/").get(async (_, res) => {
  res.status(200).end();
});

export default googleSheetRouter;
