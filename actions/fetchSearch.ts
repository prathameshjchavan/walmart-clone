"use server";

import { Result } from "@/typings/searchTypings";

export const fetchSearch = async (searchTerm: string) => {
  const username = process.env.OXYLABS_USERNAME!;
  const password = process.env.OXYLABS_PASSWORD!;

  const url = new URL(`https://www.walmart.com/search?q=${searchTerm}`);

  const body = {
    source: "universal_ecommerce",
    url: url.toString(),
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
      revalidate: 60 * 60, // revalidate every 1 hour
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.results.length === 0) return;
      const result: Result = data.results[0];

      return { data: result };
    })
    .catch(() => ({ data: null }));

  return response;
};
