function getElementsLessThan100AtProperty(obj, key) {
    let newAry = [];
    if (obj[key])
        for (let i = 0; i < obj[key].length; i++) {
            if (obj[key][i] < 100)
                newAry.push(obj[key][i]);
        }
    else
        return newAry;
    return newAry;
}