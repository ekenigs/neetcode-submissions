class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        const n = numbers.length;
        let left = 0;
        let right = n - 1;

        while (numbers[left] + numbers[right] !== target) {
            if (numbers[left] + numbers[right] > target) {
                right--;
            } else {
                left++;
            }
        }

        return [left + 1, right + 1];
    }
}
