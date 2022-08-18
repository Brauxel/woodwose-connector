import { Request, Response } from "express";
import { getWooCommerceInventoryAndOverwriteGoogleSheet } from "../../services/combine-inventory";
/**
 * Combine Inventory
 * @route POST /api/combine-inventory
 */

export const handleCombineInventory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { googleSheetsInstance } = res.locals;
    const { id: spreadsheetId } = req.params;
    const { range } = req.query;

    const googleSheetRes = await getWooCommerceInventoryAndOverwriteGoogleSheet(
      googleSheetsInstance,
      spreadsheetId,
      range as string
    );

    res.status(200).json({
      data: googleSheetRes?.data,
    });
  } catch (error) {
    res.status(404).send({ error: "Not found" });
  }
};
