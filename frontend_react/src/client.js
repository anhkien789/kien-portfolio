import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.KIEN_PORTFOLIO_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-07-07",
  useCdn: true,
  token: process.env.KIEN_PORTFOLIO_SANITY_TOKEN,
});
