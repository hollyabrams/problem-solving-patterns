/**The main idea of the function is to first compute the total sum of the array. Then, as we iterate through the array, we can keep a running total of the left side of the array and use subtraction to compute the right side. We can then check if the left side equals the right side. */
function pivotIndex(nums) {
    let totalSum = nums.reduce((a, b) => a + b, 0);
    let leftSum = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if(leftSum === (totalSum - leftSum - nums[i])) {
            return i;
        }
        leftSum += nums[i];
    }
    
    return -1;
}


// Time Complexity: O(N)
