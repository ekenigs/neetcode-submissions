class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map<string, string[]>();

        for (let s of strs) {
            const arr = Array(26).fill(0);
            
            for (let c of s) {
                const idx = c.charCodeAt(0) - 97;

                arr[idx]++;
            }

            const key = arr.join(',');

            if (!map.has(key)) {
                map.set(key, [s])
            } else {
                const cur = map.get(key);

                cur.push(s);

                map.set(key, cur)
            }
        }

        return Array.from(map.values());
    }
}
