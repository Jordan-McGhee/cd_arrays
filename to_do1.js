// Push Front
// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.

function pushFront(arr, val){
    for (i=arr.length; i>0; i--){
        arr[i] = arr[i-1]
    }
    arr[0] = val

    return arr
}

// console.log(pushFront([1,2,3,4,5], 0))

// Pop Front
// Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().

function popFront(arr){
    let val = arr[0]

    for (i=0; i<arr.length; i++){
        arr[i] = arr[i+1]
    }
    arr.length = arr.length-1
    console.log(arr)
    
    return val
}

// console.log(popFront([0,1,2,3,4,5]))

// Insert At
// Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).

function insertAt(arr, ind, val){
    for (i=arr.length; i > ind; i--){
        arr[i] = arr[i-1]
    }
    arr[ind] = val
    
    return arr
}

// console.log(insertAt([0,1,2,4,5], 3, 3))

// Remove At
// Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).

function removeAt(arr, ind){
    let val = arr[ind]

    for(i=ind; i<arr.length; i++){
        arr[i] = arr[i+1]
    }
    arr.length = arr.length-1
    console.log(arr)

    return val
}

// console.log(removeAt([0,1,2,3,4,5],3))

// Swap Pairs
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.

function swapPairs(arr){
    if (arr.length % 2 == 0){
        for (i=0; i<arr.length; i += 2){
            let temp = arr[i+1]
            arr[i+1] = arr[i]
            arr[i] = temp
        }
    } else {
        for (i=0; i < arr.length-1; i+= 2){
            let temp = arr[i+1]
            arr[i+1] = arr[i]
            arr[i] = temp
        }
    }
    return arr
}

// console.log(swapPairs([0,1,2,3,4,5]))
// console.log(swapPairs([0,1,2,3,4]))

// Remove Duplicates
// Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.
let arr = [0,0,1,1,1,2,2,3,4,5,5]
// need to keep track of how many unique values are in list
// need to move unique values to front
// use unique value count to change length of arr and return that

// Second: Solve this without using any nested loops.


function removeDupes2(arr){

}