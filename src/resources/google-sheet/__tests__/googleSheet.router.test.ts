import request from "supertest";
import app from "../../../app";

describe("GET /api/google-sheet/:id", () => {
  it("should return a 200 response", async () => {
    const response = await request(app).get(
      "/api/google-sheet/1LsZQD67Lj166_5Hh7-BY6sKS8vKEwDCylxmmtUOIilY"
    );
    expect(response.statusCode).toBe(200);
    expect(response.body.data.length).toBeGreaterThanOrEqual(1);
  });
});

describe("PUT /api/google-sheet/:id", () => {
  it("should return a 200 response", async () => {
    const response = await request(app).put(
      "/api/google-sheet/1LsZQD67Lj166_5Hh7-BY6sKS8vKEwDCylxmmtUOIilY"
    );
    expect(response.statusCode).toBe(200);
  });
});

describe("POST /api/google-sheet", () => {
  it("should return a 200 response", async () => {
    const response = await request(app).post("/api/google-sheet");
    expect(response.statusCode).toBe(200);
  });
});
