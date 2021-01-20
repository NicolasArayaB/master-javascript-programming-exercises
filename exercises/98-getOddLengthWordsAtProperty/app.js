function getOddLengthWordsAtProperty(obj, key) {
    let newAry = [];
    for (let i = 0; i > obj[key].length; i++) {
        if (obj[key].length % 2)
            continue;
        else
            newAry.push(ary[i])
    }
    return newAry;
}