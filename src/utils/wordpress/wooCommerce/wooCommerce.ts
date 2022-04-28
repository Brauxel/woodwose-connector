import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { logAndThrowError } from "../../logger";
import { Product } from "./@types/wooCommerceTypes";

export const createWooCommerceApi = (
  url = process.env.WORDPRESS_URL as string,
  consumerKey = process.env.WOOCOMMERCE_CONSUMER_KEY as string,
  consumerSecret = process.env.WOOCOMMERCE_CONSUMER_SECRET as string
) => {
  try {
    return new WooCommerceRestApi({
      url,
      consumerKey,
      consumerSecret,
      version: "wc/v3",
    });
  } catch (error) {
    return logAndThrowError(
      "Could not create Woo Commerce Api",
      error as Error
    );
  }
};

export const getWooCommerceProducts = () => {
  const WooCommerce = createWooCommerceApi();

  return WooCommerce.get("products")
    .then((response) => response.data)
    .catch((error) => {
      logAndThrowError("The GET /products call returned an error", error);
    });
};

export const getWooCommerceInventory = async () => {
  try {
    const products = await getWooCommerceProducts();
    return products
      .filter(
        ({ stock_quantity }: Product) => typeof stock_quantity === "number"
      )
      .map(({ sku, stock_quantity }: Product) => ({
        sku,
        stock_quantity,
      }));
  } catch (error) {
    logAndThrowError(
      "Encountered and error in the getInventory function",
      error as Error
    );
  }
};
