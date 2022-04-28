import { sheets_v4 } from "googleapis";
import {
  overwriteGoogleSheet,
  sanitizeDataForGoogleSheetsWrite,
} from "../../utils/google-sheets";
import { getWooCommerceInventory } from "../../utils/wordpress";

export const getWooCommerceInventoryAndOverwriteGoogleSheet = async (
  googleSheetsInstance: sheets_v4.Sheets,
  spreadsheetId: string,
  range: string
) => {
  const wooCommerceInventory = await getWooCommerceInventory();
  const googleSheetData =
    sanitizeDataForGoogleSheetsWrite(wooCommerceInventory);
  const googleSheetRes = await overwriteGoogleSheet(
    googleSheetsInstance,
    spreadsheetId,
    range as string,
    googleSheetData
  );

  return googleSheetRes;
};
