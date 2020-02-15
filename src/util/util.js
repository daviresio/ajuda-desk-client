export const generateId = () => '_' + Math.random().toString(36).substr(2, 9)

export const replaceNullValues = (obj, array = [], ignore = []) => {
    obj = {...obj};
    Object.keys(obj).forEach((key) => {
        if (ignore.findIndex(x => x === key) === -1 && obj[key] === null) {
            if (array.findIndex(x => x === key) !== -1) {
                obj[key] = []
            } else {
                obj[key] = ''
            }
        }
    });
    return obj;
}

export const noneSelectValue = {label: '---', value: 0}