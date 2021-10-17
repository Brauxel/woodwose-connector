import { Router } from "express";
import {
  getGoogleSheet,
  postGoogleSheet,
  putGoogleSheet,
} from "./googleSheet.controller";

const googleSheetRouter = Router();

/**
 * Google Sheet
 * @route /api/google-sheet
 */
googleSheetRouter
  .route("/")
  .get(getGoogleSheet)
  .post(postGoogleSheet)
  .put(putGoogleSheet);

export default googleSheetRouter;
