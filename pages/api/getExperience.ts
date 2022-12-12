import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Experience } from "../../typings";

const query = encodeURIComponent(`*[ _type == "experience"]{ ..., technology[] -> }`);
const url = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/production?query=${query}`;

type Data = {
  experience: Experience[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const experience: Experience[] = await fetch(url).then((res) =>
    res.json().then((data) => {
      return data.result;
    })
  );

  res.status(200).json({ experience });
}
