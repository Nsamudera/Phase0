//Logic Challenge - Mencari Median

function cariMedian(arr) {
    //if for when there is a clear middle (AKA the length is not divisible by 2)
    if (arr.length % 2 != 0) {
        var mid = Math.round(arr.length / 2)
        //*** note that we return 'mid-1' because mid is based on .length while index starts with 0
        return arr[mid - 1]

        //if for when there is no clear middle (AKA the length is divisible by 2)
    } else if (arr.length % 2 == 0) {
        var mid1 = (arr.length / 2) - 1
        var mid2 = arr.length / 2
        return (arr[mid1] + arr[mid2]) / 2
    }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5