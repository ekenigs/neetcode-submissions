class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const t = temperatures;
        const n = t.length;
        
        if (!n) {
            return [];
        }
        
        const res = Array(n).fill(0);
        const stack: [number, number][] = [];

        for (let i = 0; i < n; i++) {
            const cur = t[i];

            while (stack.length > 0 && cur > stack.at(-1)[0]) {
                const [_, idx] = stack.pop();

                res[idx] = i - idx;
            }

            stack.push([cur, i]);
        } 


        return res;
    }
}
