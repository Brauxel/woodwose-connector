import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
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
    console.error(
      `Could not create Woo Commerce Api: ${JSON.stringify(error)}`
    );
    throw new Error("Could not create Woo Commerce Api");
  }
};

export const getProducts = async () => {
  const WooCommerce = createWooCommerceApi();

  return WooCommerce.get("products")
    .then((response) => response.data)
    .catch((error) => {
      console.error(`GET /products Error: ${error.response.data}`);
      throw new Error("The GET /products call returned an error");
    });
};

export const getInventory = async () => {
  try {
    const products = await getProducts();
    return products
      .filter(
        ({ stock_quantity }: Product) => typeof stock_quantity === "number"
      )
      .map(({ sku, stock_quantity }: Product) => ({
        sku,
        stock_quantity,
      }));
  } catch (error) {
    console.error(
      `Encountered and error in the getInventory function: ${JSON.stringify(
        error
      )}`
    );
    throw new Error("Error in creating inventory array");
  }
};
