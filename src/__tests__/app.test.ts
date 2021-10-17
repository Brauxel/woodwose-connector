import request from "supertest";
import app from "../app";

describe("GET /random-url", () => {
  it("should return 404", async () => {
    const response = await request(app).get("/just-a-random-url");
    expect(response.statusCode).toBe(404);
  });
});
