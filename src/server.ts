import { app } from "./app";

const port = 3000;

export const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`REST API is on http://localhost:${port}/api`);
    });
  } catch (e) {
    console.error(e);
  }
};
