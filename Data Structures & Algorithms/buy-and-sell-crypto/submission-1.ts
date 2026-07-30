class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let res = 0;
        let bought = prices[0];

        for (let i = 0; i < prices.length; i++) {
            const cur = prices[i];

            if (cur < bought) {
                bought = cur;
            }

            res = Math.max(res, cur - bought);
        }

        return res;
    }
}
