function getAverageOfElementsAtProperty(obj, key) {
    arySum = 0;
    aryLength = obj["key"].length;
    
    for (let i = 0; i < aryLength; i++) {
        arySum += obj[key][i];
    }
    
    let result = arySum / aryLength
    if (!result)
        return 0;
    else
        return result;
}