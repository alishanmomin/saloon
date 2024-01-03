import axios from 'axios';

export const callApi = async (url, data) =>
{
    try
    {
        let response;
        response = await axios.post(url, data);

        return { data: response.data, error: null };
    } catch (error)
    {
        return { data: null, error };
    }
};

export default callApi;
