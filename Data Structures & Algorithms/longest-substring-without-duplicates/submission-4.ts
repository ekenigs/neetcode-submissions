class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        const n = s.length;
        const map = new Map<string, number>();

        let l = 0;
        let res = 0;

        for (let r = 0; r < n; r++) {
            const cur = s[r];
            
            if (map.has(cur)) {
                l = Math.max(l, map.get(cur) + 1)
            }

            map.set(cur, r);
            res = Math.max(res, r - l + 1);
        }

        return res; 
    }
}
