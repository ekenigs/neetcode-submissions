class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        const n = piles.length;
    
        piles.sort((a, b) => a - b);

        let left = 1;
        let right = piles[n - 1];
        let k = right;

        while (left <= right) {
            const mid = right - Math.floor((right - left) / 2);

            let hours = 0;

            for (let p of piles) {
                hours += Math.ceil(p / mid);
            }

            if (hours <= h && mid < k) {
                k = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return k;
    }
}
