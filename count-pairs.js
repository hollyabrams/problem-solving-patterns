/** This problem can be solved by sorting the array and then using two pointers to check if there is a pair of numbers whose sum equals the target number. Here is the JavaScript solution with time complexity of O(n log n) due to the sorting operation. */
function countPairs(arr, num) {
  arr.sort((a, b) => a - b);

  let count = 0;
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
      let sum = arr[start] + arr[end];

      if (sum === num) {
          count++;
          start++;
          end--;
      } else if (sum < num) {
          start++;
      } else {
          end--;
      }
  }

  return count;
}
