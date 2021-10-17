import dotenv from "dotenv";
import fs from "fs";

export const hydrateEnv = () => {
  if (fs.existsSync(".env")) {
    // TODO: Enter Logger here
    dotenv.config({ path: ".env" });
  } else {
    // TODO: Enter Logger here
    throw new Error("Please provide an .env file");
  }
};
