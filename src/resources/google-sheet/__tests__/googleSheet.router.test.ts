import request from "supertest";
import app from "../../../app";

describe("GET /api/google-sheet", () => {
  it("should return a 200 response", async () => {
    const response = await request(app).get("/api/google-sheet");
    expect(response.statusCode).toBe(200);
  });
});

describe("PUT /api/google-sheet", () => {
  it("should return a 200 response", async () => {
    const response = await request(app).put("/api/google-sheet");
    expect(response.statusCode).toBe(200);
  });
});

describe("POST /api/google-sheet", () => {
  it("should return a 200 response", async () => {
    const response = await request(app).post("/api/google-sheet");
    expect(response.statusCode).toBe(200);
  });
});
