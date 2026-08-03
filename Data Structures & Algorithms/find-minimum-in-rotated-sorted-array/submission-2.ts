class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        const n = nums.length;

        let l = 0;
        let r = n - 1;

        while (l < r) {
            const m = l + Math.floor((r - l) / 2);
            const mid = nums[m];
            const right = nums[r];
            const left = nums[l];

            if (mid < right) {
                r = m;
            } else {
                l = m + 1;
            }
        }

        return nums[l];
    }
}
