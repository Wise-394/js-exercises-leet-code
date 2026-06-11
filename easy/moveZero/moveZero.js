/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

let moveZeroes = (nums) => {
  if (nums.length === 1) return nums;
  let slowPointer = 0;
  let fastPointer = 0;
  while (fastPointer <= nums.length) {
    if (nums[fastPointer]) {
      let temp = nums[fastPointer];
      nums[fastPointer] = nums[slowPointer];
      nums[slowPointer] = temp;
      slowPointer++;
    }
    fastPointer++;
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
