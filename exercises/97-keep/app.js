function keep(ary, keeper) {
    newAry = []
    for (let i = 0; i < ary.length; i++) {
        if (ary[i] == keeper)
            newAry.push(keeper);
    }
    return newAry;
}