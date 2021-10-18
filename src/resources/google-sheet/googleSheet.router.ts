import { Router } from "express";
import {
  getGoogleSheet,
  postGoogleSheet,
  putGoogleSheet,
} from "./googleSheet.controller";

const googleSheetRouter = Router();

/**
 * Google Sheet
 * @route /api/google-sheet/
 */
googleSheetRouter.route("/").post(postGoogleSheet);

/**
 * Google Sheet
 * @route /api/google-sheet/:id
 */
googleSheetRouter.route("/:id").get(getGoogleSheet).put(putGoogleSheet);

export default googleSheetRouter;
