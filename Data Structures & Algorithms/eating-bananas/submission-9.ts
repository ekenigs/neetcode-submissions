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


            console.log({ left, mid, right, hours, h })

            if (hours <= h && mid < k) {
                k = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return k;
    }
    // minEatingSpeed(piles: number[], h: number): number {
    //     const n = piles.length;
    
    //     piles.sort((a, b) => a - b);

    //     let left = 0;
    //     let right = n - 1;
    //     let k = piles[right];

    //     while (left < right) {
    //         const mid = right - Math.floor((right - left) / 2);
    //         const cur = piles[mid];

    //         let hours = mid + 1;

    //         for (let i = mid; i < n; i++) {
    //             hours += Math.ceil(piles[i] / cur);
    //         }

    //         if (hours < h && cur < k) {
    //             k = cur;
    //             right = mid - 1;
    //         } else {
    //             left = mid + 1;
    //         }
    //     }

    //     return k;
    // }
}
