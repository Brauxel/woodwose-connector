import { Request, Response } from "express";
/**
 * Combine Inventory
 * @route POST /api/combine-inventory
 */

import {
  overwriteGoogleSheet,
  sanitizeDataForGoogleSheetsWrite,
} from "../../utils/google-sheets";
import { getWooCommerceInventory } from "../../utils/wordpress";

export const combineInventoryAndOverwriteGoogleSheet = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { googleSheetsInstance } = res.locals;
    const { id: spreadsheetId } = req.params;
    const { range } = req.query;

    const wooCommerceInventory = await getWooCommerceInventory();
    const googleSheetData =
      sanitizeDataForGoogleSheetsWrite(wooCommerceInventory);
    const googleSheetRes = await overwriteGoogleSheet(
      googleSheetsInstance,
      spreadsheetId,
      range as string,
      googleSheetData
    );

    res.status(200).json({
      data: googleSheetRes?.data,
    });
  } catch (error) {
    res.send(400).send(error);
  }
};
