// Reverse
// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working 'in-place' means that you cannot use a second array – move values within the array that you are given. As always, do not use built-in array functions such as splice().

function reverse(arr){
    // iterate over half the list. Only go half way because we're swapping values from the front and end, working towards the middle
    for (i=0; i<(arr.length/2); i++){
        // create temporary variable to store first variable
        let temp = arr[i]
        // replace variable at index i with variable from the end of the list. As i increments, we move further from the end of the list as well
        arr[i] = arr[(arr.length-1-i)]
        // replace the later index with the value stored in our temp variable
        arr[(arr.length-1-i)] = temp
    }
    return arr
}

// console.log(reverse([1,2,3,4,5,6]))

// Rotate
// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr's values to the right by that amount. 'Wrap-around' any values that shift off array's end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1), 
// change the array to [3,1,2]. Don't use built-in functions.
// Second: allow negative shiftBy (shift L, not R).
// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
// Fourth: minimize the touches of each element

function rotate(arr, shiftBy){
    // create variable to use in our while loop. Decrement it each loop to shift our arr the appropriate amount of times
    let shift = Math.abs(shiftBy)

    // while loop since we don't know how many times we'll loop
    while (shift > 0){
        // check if the shift is positive or negative
        if (shiftBy > 0){
            // POSITIVE
            // create temp variable for the last value in the arr since a positive shift will move every value right in the list
            let temp = arr[arr.length-1]
            // iterate over the arr backwards from the end
            for (i = arr.length-1; i > 0; i--){
                // move the value from the previous arr index to the current index
                arr[i] = arr[i-1]
            }
            // set the 0th index equal to our temp value, the value from the end of the list
            arr[0] = temp

        } else {
            // NEGATIVE
            // set temp variable equal to first value in the arr since a negative shift will move every value left in the list
            let temp = arr[0]
            // iterate over the arr from the beginning
            for(i=0; i < arr.length-1; i++){
                // move the value from the next arr index to the current index
                arr[i] = arr[i+1]
            }
            // set the last index in the arr equal to our temp value
            arr[arr.length-1] = temp
        }
        // after one iteration, decrement our shift variable to shorten how many times the loop will run
        shift--
    }
    return arr
}

console.log(rotate([1,2,3,4,5],2))



// Filter Range
// Alan is good at breaking secret codes. One method is to eliminate values that lie within a specific known range. Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.

function filterRange(arr,min,max){
    // create index variable to replace values from the beginning with our arr values that fall within min & max
    let index = 0

    // iterate over arr
    for (i=0; i<arr.length; i++){
        // check if arr @ index i falls between our min & max constraints
        if (arr[i] <= max && arr[i] >= min){
            // if it does, replace arr @ the value in our index variable with arr @ i
            arr[index] = arr[i]
            // increment index variable so we don't overwrite any values we've changed
            index++
        }
    }
    // shorten our arr length to whatever our index value got up to
    arr.length = index
    return arr
}

// console.log(filterRange([0,0,1,2,2,3,4,4,5,6,7,8,9],1,5))

// Concat
// Replicate JavaScript's concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array's elements, followed by the second array's elements. Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].

function concat(arr1, arr2){
    // create two variables, one for our new list (empty for now) and an index variable to increment in our for loops
    let newArr = []
    let index = 0

    // first for loop iterates over our first arr
    for (i=0; i<arr1.length; i++){
        // for each value in arr1, we add it to newArr in place where our index variable is currently at
        newArr[index] = arr1[i]
        // increments index after so we don't overwrite any values
        index++
    }

    // repeat this same proces for arr2
    for (i=0; i<arr2.length; i++){
        newArr[index] = arr2[i]
        index++
    }

    return newArr
}

// console.log(concat(['a','b'], [1,2]))
// console.log(concat([1,2,3,4,5], [6,7,8,9,0]))
