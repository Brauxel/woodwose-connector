import { v1 as uuid } from "uuid";

export const createOAuth1aSignature = () => {
  const oauth_timestamp = Math.floor(Date.now() / 1000);
  const oauth_nonce = uuid();
  console.log("createOAuth1aSignature", oauth_nonce);
  const parameters = {
    oauth_consumer_key: "ck_439a9ed9c793d204c92ac7a3b910c7454ed08cef",
    oauth_signature_method: "HMAC-SHA1",
    oauth_timestamp,
    oauth_nonce,
    oauth_version: "1.0",
  };

  // const oauth = OAuth({
  //   consumer: {
  //       key: ck,
  //       secret: cs
  //   },
  //   signature_method: 'HMAC-SHA1',
  //   hash_function: function(base_string, key) {
  //       return CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA1(base_string, key));
  //   }
  // })

  return true;
};
