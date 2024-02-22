"use server";

import { type Result } from "@/typings/searchProduct";

export const fetchProduct = async (url: string) => {
  const username = process.env.OXYLABS_USERNAME!;
  const password = process.env.OXYLABS_PASSWORD!;
  const newUrl = new URL(`https://www.walmart.com${url}`);

  const body = {
    source: "universal_ecommerce",
    url: newUrl.toString(),
    geo_location: "United States",
    parse: true,
  };

  const response = await fetch("https://realtime.oxylabs.io/v1/queries", {
    method: "post",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Basic " + Buffer.from(`${username}:${password}`).toString("base64"),
    },
    next: {
      revalidate: 60 * 60 * 24, // revalidate every 1 day
    },
  })
    .then((res) => res.json())
    .then((data) => {
      const result: Result = data.results[0];

      return { data: result };
    })
    .catch(() => ({ data: null }));

  return response;
};
