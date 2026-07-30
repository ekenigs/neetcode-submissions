class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        const n = prices.length;

        let res = 0;
        let b = prices[0];

        for (let i = 0; i < n; i++) {
            const cur = prices[i];

            if (cur < b) {
                b = cur;
            }

            res = Math.max(res, cur - b);
        }

        return res;
    }
}
