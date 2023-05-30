/**This function goes through the input array from the second element to the end. If the current number is less than the previous one, it increases the currentFallLength. If the currentFallLength is larger than maxFallLength, it updates maxFallLength. If the current number is not less than the previous one, it resets currentFallLength to 1. In the end, it returns maxFallLength as the length of the longest fall. */
function longestFall(arr) {
    if(arr.length === 0) return 0;
    
    let maxFallLength = 1;
    let currentFallLength = 1;
    
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < arr[i-1]) {
            currentFallLength++;
            maxFallLength = Math.max(maxFallLength, currentFallLength);
        } else {
            currentFallLength = 1;
        }
    }
    
    return maxFallLength;
}

