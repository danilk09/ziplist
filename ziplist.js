"use strict";
function zipList(array1, array2) {
    if (array1.length !== array2.length) {
        return -1;
    }
    const result = [];
    for (let i = 0; i < array1.length; i++) {
        result.push(array1[i]);
        result.push(array2[i]);
    }
    return result;
}
console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
