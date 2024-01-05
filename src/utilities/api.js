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

export const GetPendingAppointment = async () =>
{
    const res = await instance.post('/getPendingAppointment');
    return res?.data;
}

export const GetAllAppointment = async () =>
{
    const res = await instance.post('/getAllAppointment');
    return res?.data;
}

export const GetAllBanners = async () =>
{
    const res = await instance.post('/getBanners');
    return res?.data;
}

export const CreateBanner = async (body) =>
{
    const res = await instance.post('/createBanner', body);
    return res?.data;
}

export const UpdateBanner = async (body) =>
{
    const res = await instance.post('/updateBanner', body);
    return res?.data;
}

export const UpdateBannerStatus = async (body) =>
{
    const res = await instance.post('/updateBannerStatus', body);
    return res?.data;
}

export const UpdateAppointmentStatus = async (body) =>
{
    const res = await instance.post('/updateAppointmentStatus', body);
    return res?.data;
}

export const UpdatePassword = async (body) =>
{
    const res = await instance.post('/updatePassword', body);
    return res?.data;
}

export const GetStats = async () =>
{
    const res = await instance.post('/getStats');
    return res?.data;
}

export const GetReviews = async () =>
{
    const res = await instance.post('/getReviews');
    return res?.data;
}
