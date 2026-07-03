class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const n = nums.length;
        const res: number[][] = [];

        nums.sort((a, b) => a - b);

        for (let i = 0; i < n; i++) {
            const cur = nums[i];

            if (cur > 0) break;
            if (i > 0 && cur === nums[i - 1]) continue;

            let l = i + 1;
            let r = n - 1;

            while (l < r) {
                const left = nums[l];
                const right = nums[r];
                const sum = cur + left + right;

                if (sum > 0) {
                    r--;
                } else if (sum < 0) {
                    l++
                } else {
                    res.push([cur, left, right])

                    l++;
                    r--;
                    while (l < r && nums[l] === nums[l - 1]) {
                        l++;
                    }
                }
            }

        }

        return res;
    }
}
