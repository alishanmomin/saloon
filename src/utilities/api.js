import instance from "../instance";

export const SignIn = async (url, body) =>
{
    const res = await instance.post(url, body);
    return res?.data;
}

export const CreateCategory = async (url, body) =>
{
    const res = await instance.post(url, body);
    return res?.data;
}

export const UpdateCategory = async (url, body) =>
{
    const res = await instance.post(url, body);
    return res?.data;
}

export const GetAllCategory = async (url) =>
{
    const res = await instance.post(url);
    return res?.data;
}
