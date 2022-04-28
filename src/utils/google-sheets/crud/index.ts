import { sheets_v4 } from "googleapis";
import { logAndThrowError } from "../../logger";
import _ from "lodash";
import { Id } from "../../../globals/@types/GenericTypes";

export const clearGoogleSheet = async (
  googleInstance: sheets_v4.Sheets,
  spreadsheetId: string,
  range: string
) => {
  try {
    const res = await googleInstance.spreadsheets.values.clear({
      spreadsheetId,
      range,
    });

    return res;
  } catch (error) {
    logAndThrowError(
      `Unable to clear google sheet with ID ${spreadsheetId} and range ${range}`,
      error as Error
    );
  }
};

export const overwriteGoogleSheet = async (
  googleInstance: sheets_v4.Sheets,
  spreadsheetId: string,
  range: string,
  values: Id[][]
) => {
  await clearGoogleSheet(googleInstance, spreadsheetId, range);
  try {
    const res = await googleInstance.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values,
      },
    });

    return res;
  } catch (error) {
    logAndThrowError(
      `Unable to overwrite the google sheet ${spreadsheetId} with range ${range}`,
      error as Error
    );
  }
};

export const readGoogleSheet = async (
  googleSheetsInstance: sheets_v4.Sheets,
  spreadsheetId: string,
  range: string
) => {
  const readData = await googleSheetsInstance.spreadsheets.values.get(
    {
      spreadsheetId,
      range,
    },
    (error, res) => {
      if (error) {
        logAndThrowError(
          "The Google Sheets API returned an error.",
          error as Error
        );
      }

      if (res) {
        const rows = res.data.values;
        return rows;
      }
    }
  );

  return readData;
};

export const sanitizeDataForGoogleSheetsWrite = (data: Id[]): Id[][] => {
  const sanitizedData = [];
  sanitizedData.push(
    _.uniq(
      _.flatMapDeep(
        _.map(data, (value) => {
          return Object.keys(value);
        })
      )
    )
  );

  _.forEach(data, (value) => {
    sanitizedData.push(Object.values(value));
  });

  return sanitizedData;
};
