import axios from "axios";

export const getProducts = async () => {
  const res = await axios.get(
    `${process.env.WORDPRESS_URL}wp-json/wp/v2/posts`
  );

  // const res2 = await axios.get(
  //   `${process.env.WORDPRESS_URL}wp-json/wp/v3/products`,
  //   {
  //     auth: {
  //       username: "ck_439a9ed9c793d204c92ac7a3b910c7454ed08cef",
  //       password: "cs_1af958a27a305d3e0969284abe276a993f8bae0c",
  //     },
  //   }
  // );
  console.log("getProducts2", res.data);

  return true;
};

export const getInventory = async () => {
  await getProducts();
  console.log("prepare the product data for inventory");

  return true;
};
