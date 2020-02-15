export const generateId = () => '_' + Math.random().toString(36).substr(2, 9)

export const replaceNullValues = (obj, target = null, replacement = '') => {
    obj = {...obj};
    Object.keys(obj).forEach((key) => {
        if (obj[key] === target) {
            obj[key] = replacement;
        } else if (typeof obj[key] == 'object' && !Array.isArray(obj[key])) {
            obj[key] = replaceNullValues(obj[key]);
        }
    });
    return obj;
}