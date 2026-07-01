class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const n = nums.length;
        const res: number[] = Array(n).fill(1);

        for (let i = 1; i < n; i++) {
            const prev = i - 1;

            res[i] = nums[prev] * res[prev];
        }

        let mul = 1;
        
        for (let i = n - 1; i >= 0; i--) {
            res[i] *= mul;
            mul *= nums[i];
        }

        return res;
    }
    // productExceptSelf(nums: number[]): number[] {
    //     const n = nums.length;
    //     const res: number[] = [];
    //     const pref: number[] = [];
    //     const suff: number[] = [];

    //     pref[0] = 1;
    //     suff[n - 1] = 1;

    //     for (let i = 1; i < n; i++) {
    //         const prev = i - 1;

    //         pref[i] = nums[prev] * pref[prev];
    //     }

    //     for (let i = n - 2; i >= 0; i--) {
    //         const prev = i + 1;

    //         suff[i] = nums[prev] * suff[prev];
    //     }

    //     for (let i = 0; i < n; i++) {
    //         res[i] = pref[i] * suff[i];
    //     }

    //     return res;
    // }
}
