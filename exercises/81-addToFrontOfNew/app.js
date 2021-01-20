function addToFrontOfNew(ary, element) {
    newAry = [];
    
    for (let i = 0; i < ary.length; i++) {
        newAry.unshift(ary[i]);
    }
    newAry.unshift(element);
    
    return newAry;
}