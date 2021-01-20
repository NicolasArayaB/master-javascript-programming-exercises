function addToBackOfNew(ary, element) {
    newAry = [];
    
    for (let i = 0; i < ary.length; i++) {
        newAry.push(ary[i]);
    }
    newAry.push(element);
    
    return newAry;
}