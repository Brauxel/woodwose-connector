import request from "supertest";
import app from "../../../app";

describe("POST /api/combine-inventory/:id", () => {
  it("should return a 200 response when successful", async () => {
    const response = await request(app).post(
      "/api/combine-inventory/1IpyCMtLy9r6wAoUeIXx9AeUVwToC5SIbZJkVM0kWCMA?range=WooCommerceInventory"
    );
    expect(response.statusCode).toBe(200);
    expect(Object.values(response.body.data).length).toBeGreaterThanOrEqual(1);
  });

  it("should return a 400 response when there is an error", async () => {
    const response = await request(app).post(
      "/api/combine-inventory/a-wrong-spreadsheet-id?range=WooCommerceInventory"
    );
    expect(response.statusCode).toBe(404);
  });
});
