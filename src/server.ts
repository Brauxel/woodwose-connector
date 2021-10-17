import app from "./app";

export const start = async () => {
  try {
    app.listen(app.get("port"), () => {
      console.log("REST API is on http://localhost:%d/api", app.get("port"));
    });
  } catch (e) {
    console.error(e);
  }
};
