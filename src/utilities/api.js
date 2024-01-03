import instance from "../instance";

export const SignIn = async (body) =>
{
    const res = await instance.post('/login', body);
    return res?.data;
}

export const CreateCategory = async (body) =>
{
    const res = await instance.post('/createCategory', body);
    return res?.data;
}

export const UpdateCategory = async (body) =>
{
    const res = await instance.post('/updateCategory', body);
    return res?.data;
}

export const GetAllCategory = async () =>
{
    const res = await instance.post('/getAllCategory');
    return res?.data;
}

export const CreateService = async (body) =>
{
    const res = await instance.post('/createService', body);
    return res?.data;
}

export const GetServiceTypes = async (body) =>
{
    const res = await instance.post('/getServices', body);
    return res?.data;
}

export const UpdateService = async (body) =>
{
    const res = await instance.post('/updateService', body);
    return res?.data;
}
