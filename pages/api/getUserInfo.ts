import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";  
import { sanityClient } from "../../sanity";
import { UserInfo } from "../../typings";


const query = groq`*[ _type == "userInfo"][0]`;

type Data = {
    userInfo: UserInfo;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const userInfo: UserInfo = await sanityClient.fetch(query);

    res.status(200).json({ userInfo })
  }
  