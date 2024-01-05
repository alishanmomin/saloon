function flattenObject(obj, prefix = '')
{
    const flattened = {};

    for (const key in obj)
    {
        if (typeof obj[key] === 'object' && obj[key] !== null)
        {
            Object.assign(flattened, flattenObject(obj[key], `${ prefix }${ key }_`));
        } else
        {
            flattened[`${ prefix }${ key }`] = obj[key];
        }
    }

    return flattened;
}