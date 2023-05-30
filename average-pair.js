/**
 * Solved by using the technique of "two pointers". Start with a pointer at the beginning and end of the array, then based on the average of the two values, we can adjust the pointers. If the average is too small, we move the left pointer up, and if the average is too big, we move the right pointer down, until we find a match or the pointers cross.
 */
function averagePair(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        let avg = arr[start] + arr[end] / 2;
        if(avg === target) {
            return true;
        } else if (avg < target) {
            start++;
        } else {
            end--;
        }
    }

    return false;
}

// Time Complexity: O(N)
