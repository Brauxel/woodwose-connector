import { Router } from "express";
import { handleCombineInventory } from "./combineInventory.controller";

const combineInventorySheetRouter = Router();

/**
 * Combine Inventory
 * @route /api/combine-inventory/
 */
combineInventorySheetRouter.route("/:id").post(handleCombineInventory);

export default combineInventorySheetRouter;
