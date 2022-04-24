import { sheets_v4 } from "googleapis";

export const overWriteGoogleSheet = async (
  googleInstance: sheets_v4.Sheets,
  id: string,
  payload: any
) => {
  console.log("id", id, payload);

  return true;
};

export const readGoogleSheet = async (
  googleSheetsInstance: sheets_v4.Sheets,
  spreadsheetId: string,
  range: string
) => {
  const readData = await googleSheetsInstance.spreadsheets.values.get({
    spreadsheetId,
    range,
  });

  return readData;
};
