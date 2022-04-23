import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { Product } from "./@types/wooCommerceTypes";

export const createWooCommerceApi = (
  url = process.env.WORDPRESS_URL as string,
  consumerKey = process.env.WOOCOMMERCE_CONSUMER_KEY as string,
  consumerSecret = process.env.WOOCOMMERCE_CONSUMER_SECRET as string
) => {
  return new WooCommerceRestApi({
    url,
    consumerKey,
    consumerSecret,
    version: "wc/v3",
  });
};

export const getProducts = async () => {
  try {
    const WooCommerce = createWooCommerceApi();

    return WooCommerce.get("products")
      .then((response) => response.data)
      .catch((error) => {
        console.error("GET /products Error: ", error.response.data);
        throw new Error("The GET /products call returned an error");
      });
  } catch (error) {}
};

export const getInventory = async () => {
  const products = await getProducts();
  const products2 = products.filter(
    (product: Product) =>
      product.sku === "OCMTSDO03" || product.sku === "OCWTSMA02"
  );

  console.log("prepare the product data for inventory", products2);

  return true;
};
