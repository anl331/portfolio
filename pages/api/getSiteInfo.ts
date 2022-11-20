import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";  
import { sanityClient } from "../../sanity";
import { SiteInfo } from "../../typings";


const query = groq`*[ _type == "siteInfo"][0]`;

type Data = {
  siteInfo: SiteInfo;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const siteInfo: SiteInfo = await sanityClient.fetch(query);

    res.status(200).json({ siteInfo })
  }
  