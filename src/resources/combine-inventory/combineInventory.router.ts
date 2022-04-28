import { Router } from "express";
import { combineInventoryAndOverwriteGoogleSheet } from "./combineInventory.controller";

const combineInventorySheetRouter = Router();

/**
 * Combine Inventory
 * @route /api/combine-inventory/
 */
combineInventorySheetRouter
  .route("/:id")
  .post(combineInventoryAndOverwriteGoogleSheet);

export default combineInventorySheetRouter;
