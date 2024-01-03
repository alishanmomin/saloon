import instance from "../instance";

export const SignIn = async (url, body) =>
{
    const res = await instance.post(url, body);
    return res?.data;
}
