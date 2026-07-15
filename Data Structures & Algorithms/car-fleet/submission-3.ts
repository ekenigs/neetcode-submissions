class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        /**
         * 10 - 1 = 9; 9 / 3 = 3
         * 10 - 4 = 6; 6 / 2 = 3
         */

        /**
         * 10 - 4 = 6; 6 / 2 = 3
         * 10 - 1 = 9; 9 / 2 = 4,5
         * 10; 10;
         * 3; 3;
         */

        let res = 0;

        const sorted = position
            .map((p,i) => [p, (target - p) / speed[i]])
            .sort(([a], [b]) => a - b);
        let cur = -Infinity;


        
        while (sorted.length) {
            const [_, t] = sorted.pop();

            if (t > cur) {
                cur = t;
                res++;
            }    
        }

        return res;
    }
}
