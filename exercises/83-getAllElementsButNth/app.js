function getAllElementsButNth(ary, index) {
    newAry = [];
    for (let i = 0; i < ary.length; i++) {
        if (i == index)
            continue;
        else
            newAry.push(ary[i]);
    }
    return newAry;
}