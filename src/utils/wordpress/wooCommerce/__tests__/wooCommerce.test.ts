import { hydrateEnv } from "../../../secrets";
import { createWooCommerceApi } from "../wooCommerce";

describe("WordPress Utils - WooCommerce", () => {
  describe("createWooCommerceApi", () => {
    beforeAll(() => {
      hydrateEnv();
    });

    it("should create a WooCommerce API with default values in the ENV file when no custom arguments are provided", () => {
      const WooCommerce = createWooCommerceApi();

      expect(WooCommerce).toMatchObject({
        classVersion: "1.0.1",
        url: "https://woodwose.in",
        wpAPIPrefix: "wp-json",
        version: "wc/v3",
        isHttps: true,
        encoding: "utf8",
        queryStringAuth: false,
        port: "",
        timeout: undefined,
        axiosConfig: {},
      });

      expect(WooCommerce.consumerKey).toBeDefined();
      expect(WooCommerce.consumerSecret).toBeDefined();
    });

    it("should create a WooCommerce API Object with custom values", () => {
      const WooCommerce = createWooCommerceApi(
        "https://test-url.com",
        "test consumer key",
        "test consumer secret"
      );

      expect(WooCommerce).toMatchObject({
        url: "https://test-url.com",
        consumerKey: "test consumer key",
        consumerSecret: "test consumer secret",
      });
    });
  });
});
