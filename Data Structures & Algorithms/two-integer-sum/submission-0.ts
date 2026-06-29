class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const map = new Map<number, number>();

        for (let i = 0; i < nums.length; i++) {
            const cur = nums[i];
            const seek = target - cur;

            if (map.has(seek)) {
                return [map.get(seek), i];
            } 

            map.set(cur, i);
        }

        return [0, 0];
    }
}
