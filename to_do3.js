// Remove Negatives
// Implement removeNegatives() that accepts an array, removes negative values, and returns the same array (not a copy), preserving non-negatives’ order. As always, do not use built-in array functions.

function removeNegatives(arr) {
    // Loop through the array
    for (var i = 0; i < arr.length; i++) {
        // If value is negative...
        if (arr[i] < 0) {
            // Loop to move the values up
            for (var j = i + 1; j < arr.length; j++) {
                arr[j-1] = arr[j];
            }
            arr.length--; // Decrement the length of the array by 1, removing the last value
            i--; // Ensures that we don't move on to the next INDEX - the next VALUE is at the CURRENT index because all the values to the right get moved up; otherwise we skip the next value
        }
    }
}

// Second-to-Last
// Return the second-to-last element of an array. Given [42,true,4,"Kate",7], return "Kate". If array is too short, return null.

function secondToLast(arr){
    
    // check to make sure the arr has at least 2 elements
    if (arr.length >= 2) {

        // if so, return the value stored at the second to last index in the arr. arr.length-1 would give us the last, so -2 would give us the second to last
        return arr[arr.length-2]

        // we enter the else if the length of the list is shorter than 2
    } else {
        return null
    }
}

// console.log(secondToLast([1]))
// console.log(secondToLast([5,4,3,2,1]))


// Second-Largest
// Return the second-largest element of an array. Given [42,1,4,Math.PI,7], return 7. If the array is too short, return null.

function secondLargest(arr){

    // create two variables, one to keep track of the max in the list, the other to track the second largest value. Set second to a super low number so there's a better chance that we'll find that value. Don't want to set it to an index in the arr because there's a chance we could pick the max value inadvertently 
    let max = arr[0]
    let second = -1000

    // check if length is less than 2. There won't be a second largest value if so
    if (arr.length < 2) {
        return null

        // if length greater than 2, enter this condition
    } else {

        // iterate for i over the length of the list
        for (i=0; i<arr.length; i++){

            // first if checks if arr at i is greater than the value stored in max
            if(arr[i] > max){

                // if so, update second to what our max was before. If we don't do this, everytime we update max, second would stay the same and the function wouldn't work
                second = max
                max = arr[i]

                // if arr[i] isn't greater than or equal to max, we need to check if it's greater than the value stored in second
            } else if (arr[i] > second && arr[i] != max) {

                // if so, update second to the value at arr[i]
                second = arr[i]
            }
        }
        
        // I'm returning max to use in the skyscraper function, but the answer to this problem is to just return second
        return [max,second]
    }
}

// console.log(secondLargest([1,2,3,4,5]))
// console.log(secondLargest([1]))
// console.log(secondLargest([5,3,2,4,1]))
// console.log(secondLargest([5,3,4,2,1,5,5,5,4,3]))

// Nth-to-Last
// Return the element that is N-from-array’s-end. Given ([5,2,3,6,4,9,7],3), return 4. If the array is too short, return null.

function nthToLast(arr, num){

    // check to make sure the length of the array is greater than/equal to the given number
    if(arr.length<num){
        return null

        // if so, return the value stored at the length of the arr - the given number.
    } else {
        return arr[arr.length-num]
    }
}

// console.log(nthToLast([1,2,3,4,5],3))
// console.log(nthToLast([5,2,3,6,4,9,7],3))

// Nth-Largest
// Liam has "N" number of Green Belt stickers for excellent Python projects. Given arr and N, return the Nth-largest element, where (N-1) elements are larger. Return null if needed.

function nthLargest(arr,num){

    // make sure arr length is at least equal to the number
    if(arr.length<num){
        return null

        // if so, enter this condition
    } else {

        // decided to sort the list. This would work because the assumption that (N-1) elements are larger. So if we're given num = 4, we can assume that 3 numbers will be larger. When we sort the list, we can use what we did in nthToLast to grab the 4th to last number
        
        // use a bubble sort to sort the list
        // have variable done set to false
        var done = false;

        // while done != true
        while (!done) {
            // set done to true, so if we don't enter into the if condition, we exit the while loop
            done = true;

            // iterate over the arr
            for (var i = 1; i < arr.length; i++) {

                // check to see if the value of arr[i-1] is greater than arr[i]
                if (arr[i - 1] > arr[i]) {

                    // if so, that means the arr isn't sorted, so set done back to false
                    done = false;

                    // create a temp variable and set it equal to the value before arr[i]
                    var tmp = arr[i - 1];
                    // switch arr[i] and arr[i-1] with the temp
                    arr[i - 1] = arr[i];
                    arr[i] = tmp;
                }
            }
        }

        // after the arr is sorted, return the value at arr[length of arr - num]
        return arr[arr.length-num]
    }
}

// console.log(nthLargest([5,4,2,3,1], 3))
// console.log(nthLargest([9,8,7,6,5,4,3,2,1], 9))

// Skyline Heights
// Lovely Burbank has a breathtaking view of the Los Angeles skyline. Let’s say you are given an array with heights of consecutive buildings, starting closest to you and extending away. Array [-1,7,3] would represent three buildings: first is actually out of view below street level, behind it is second at 7 stories high, third is 3 stories high (hidden behind the 7-story). You are situated at street level. Return array containing heights of buildings you can see, in order. Given [-1,1,1,7,3] return [1,7]. Given [0,4] return [4]. As always with challenges, do not use built-in array functions such as unshift().

function skylineHeights(arr){

    // create a few variables, a counter variable to update the values in our newly created empty list. The counter variable is our workaround for not being able to use .push()
    // our next variable is current largest. When we iterate through the list, this will check if the values following the current largest in the list are greater. If so, that means you can see the building, so we will have to add it to the newArr
    // the last variable is going to be the max of the list. We'll use the secondLargest function from before. I returned [max, second] in that function, so I access the max by grabbing the 0th index of that function called with arr

    let count = 0
    let newArr = []
    let currentLargest = arr[0]
    let max = secondLargest(arr)[0]

    // iterate over arr
    for(i=0; i<arr.length; i++){
        
        // if arr[i] is equal to or less than 0, we wouldn't be able to see the building at all, so we use continue to go to the next value in the arr
        if (arr[i] <= 0) {
            continue

            // if not, move to the else
        } else {

            // first if, check to see if the arr[i] == max. If so, we'll add arr[i] to the list by setting the value of newArr at our count variable equal to arr[i]. Then we return newArr because no buildings following our max will be tall enough to be visible
            if (arr[i] == max){
                newArr[count] = arr[i]
                return newArr

            // else if the value at arr[i] is greater than our current largest in the list, we will add that value to the list using the newArr[count] from above. We then set currentLargest to the value at arr[i] and increment our count variable
            } else if (arr[i] > currentLargest) {
                newArr[count] = arr[i]
                currentLargest = arr[i]
                count++
            }
        }
    }

    // after we get through iterating, I don't think we'd reach this return because we'd eventually hit the max, but just in case, return newArr with the solution
    return newArr
}

console.log(skylineHeights([-1,1,1,7,3]))
console.log(skylineHeights([-1,1,1,7,3,9,12,2,25]))
console.log(skylineHeights([-1,1,1,7,3,6,7,5,4,3,3,4,9]))