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

let arr = [0,1,2,3,4,5]
function popFront(arr){
    // store first value in arr to return at the end
    let val = arr[0]

    // iterate over list from index 0 til the end
    for (i=0; i<arr.length; i++){
        // for every value in our array, we want to replace the current value at arr[i] with the next value, arr[i+1]. This is how we will remove the first value in the list. Essentially sliding values one spot over to the left.

        arr[i] = arr[i+1]
    }

    // after we finish the loop, our arr will look like > [1,2,3,4,5,undefined], we need to remove the undefined in the list to make up for taking off the first value
    
    // do this by changing the value of arr.length. Set current arr.length (6) to arr.length-1 (5)
    arr.length = arr.length-1
    
    return val
}

console.log(popFront(arr))

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
let arr1 = [0,0,1,1,1,2,2,3,4,5,5]
let arr2 = [0,1,1,2,3,4,5,5]

function removeDupes(arr){
    let index = 1 // index for where we store nonduplicate values
    let compare = arr[0] // value to compare against to check for duplicate

    for (i=1; i < arr.length; i++){
        // if value isn't a duplicate
        if (arr[i] != compare){
            // set compare to that new value
            compare = arr[i]
            // change arr at our index variable to arr[i]
            arr[index] = arr[i]
            // increment our index variable so we can store the next non-duplicate value
            index++
        }
    }
    arr.length = index // cut off end values, leaving only non-duplicates

    return arr
}

// console.log(removeDupes(arr1))
// console.log(removeDupes(arr2))