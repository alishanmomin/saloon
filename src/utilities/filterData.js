export const filterData = (property, value, data) =>
{
    let filteredArray = data;
    if (value)
    {
        const searchTermLowerCase = value.toLowerCase();
        filteredArray = filteredArray?.filter((item) =>
        {
            return (
                property.some((elem) => item[elem].toLowerCase().includes(searchTermLowerCase))
            )
        }
        );
    }
    return filteredArray;
}