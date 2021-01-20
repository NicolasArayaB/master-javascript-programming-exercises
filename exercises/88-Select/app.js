function select(ary, obj) {
    let newObj = {};
    for (let i = 0; i < ary.length; i++) {
        newObj[ary[i]] = obj[ary[i]];
    }
    return newObj;
}