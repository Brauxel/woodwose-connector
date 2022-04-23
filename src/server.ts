import app from "./app";
import { getInventory } from "./utils/wordpress";

export const start = async () => {
  try {
    app.listen(app.get("port"), () => {
      console.log("REST API is on http://localhost:%d/api", app.get("port"));
    });

    const inventory = await getInventory();
    console.log("inventory", inventory);
  } catch (e) {
    console.error(e);
  }
};
