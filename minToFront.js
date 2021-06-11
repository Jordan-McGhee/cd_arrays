// Min to Front
// Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.

function minToFront(arr){
    let min = arr[0]
    let minIndex = 0

    for (i=0; i<arr.length; i++){
        if(arr[i]<min){
            min = arr[i]
            minIndex = i
        }
    }

    for (i=minIndex; i>0; i--){
        arr[i] = arr[i-1]
    }

    arr[0] = min

    return arr
}

// console.log(minToFront([4,2,1,3,5]))
// console.log(minToFront([1,2,3,4,5,6,7,8,9,0]))