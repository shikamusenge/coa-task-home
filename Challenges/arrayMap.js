// Function to determine if there exists a contiguous subarray within the array that sums up to the target
const subarraySumExists = (arr, target) => {
  let left = 0;
  let right = 0;
  let currSum = 0;

  while (right < arr.length) {
    currSum += arr[right];

    while (currSum > target) {
      currSum -= arr[left];
      left++;
    }

    if (currSum === target) {
      return true;
    }

    right++;
  }

  return false;
};

// Example usage:
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(subarraySumExists(arr, target)); // Output: true
