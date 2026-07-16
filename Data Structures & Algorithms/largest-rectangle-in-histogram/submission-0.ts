class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights: number[]): number {
        const n = heights.length;

        let res = 0;

        for (let i = 0; i < n; i++) {
            const cur = heights[i];
            let right = i;
            let left = i;

            while (heights[right + 1] >= cur) {
                right++;
            }

            while (heights[left - 1] >= cur) {
                left--;
            }

            res = Math.max(res, cur * (right - left + 1));
        }

        return res;
    }
}
