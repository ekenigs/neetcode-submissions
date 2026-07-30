class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        const map = new Map<string, number>();

        let f = 0;
        let l = 0;
        let res = 0;

        for (let r = 0; r < s.length; r++) {
            const cur = s[r];

            map.set(cur, (map.get(cur) || 0) + 1);
            f = Math.max(f, map.get(cur));

            while ((r - l + 1) - f > k) {
                map.set(s[l], map.get(s[l]) - 1);
                l++;
            }

            res = Math.max(res, r - l + 1);
        }

        return res;
    }
}
