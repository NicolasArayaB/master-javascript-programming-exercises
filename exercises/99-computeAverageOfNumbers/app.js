function computeAverageOfNumbers(ary) {
    return ary.reduce(getSum, 0) / ary.length
}

function getSum(total, num) {
    return total + num;
}
