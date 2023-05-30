/**This problem can be solved using the two-pointer technique. We'll keep one pointer at the start of the array and one at the end, and then we'll move these pointers towards each other, swapping the elements when necessary.
 */
function separatePositive(nums) {
    let start = 0;
    let end = nums.length - 1;

    while (start < end) {
        if (nums[start] < 0 && nums[end] > 0) {
            // Swap values
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        } else if (nums[start] > 0) {
            start++;
        } else {
            end--;
        }
    }

    return nums;
}

// Time Complexity: O(N)

