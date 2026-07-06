class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        const n = heights.length;

        if (!n) {
            return 0;
        }

        let res = 0;
        let l = 0
        let r = n - 1;

        while (l < r) {
            const left = heights[l];
            const right = heights[r];
            const amount = (r - l) * Math.min(left, right);

            res = Math.max(res, amount);

            console.log({ left, right, amount, res })

            if (left > right) {
                r--;
            } else if (left < right) {
                l++;
            } else {
                r--;
                l++;
            }
        }

        return res;
    }
}
