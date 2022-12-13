import { UserInfo } from "../typings";

export const fetchUserInfo =  async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_PRODUCTION}/api/getUserInfo`);

    const data = await res.json();
    const userInfo: UserInfo = data.userInfo;

    // console.log("fetching", userInfo);

    return userInfo;
}