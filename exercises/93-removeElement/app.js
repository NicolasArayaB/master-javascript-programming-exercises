function removeElement(ary, discarder) {
    newAry = [];

    for (let i = 0; i < ary.length; i++) {
        if (ary[i] == discarder)
            continue;
        else
            newAry.push(ary[i]);
    }
    return newAry;
}