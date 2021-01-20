function getElementsGreaterThan10AtProperty(obj, key) {
    let newAry = [];

    for (let i = 0; i < obj[key].length; i++) {
        if (obj[key][i] > 10)
            newAry.push(obj[key][i]);
    }
    return newAry;
}
