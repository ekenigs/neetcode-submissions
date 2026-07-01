class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if (!nums.length) {
            return 0;
        }

        const set = new Set(nums);
        
        let res = 0;

        for (let n of set) {
            if (!set.has(n - 1)) {
                let count = 1;
                let cur = n;

                while (set.has(cur + 1)) {
                    count++;
                    cur = cur + 1;
                }

                res = Math.max(res, count);
            }
        }

        return res;
    }
}
