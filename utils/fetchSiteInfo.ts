import { SiteInfo } from "../typings";

export const fetchSiteInfo =  async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSiteInfo`);
   
    const data = await res.json();
    const siteInfo: SiteInfo = data.siteInfo;

    // console.log("fetching", siteInfo);

    return siteInfo;
}