class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const list = new Set<number>();

        for (let n of nums) {
            if (list.has(n)) {
                return true;
            }

            list.add(n);
        }

        return false;
    }
}
