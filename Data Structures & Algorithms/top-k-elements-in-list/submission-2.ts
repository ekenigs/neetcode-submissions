class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map<number, number>();

        for (let n of nums) {
            map.set(n, (map.get(n) || 0) + 1);
        }

        return Array.from(map.entries())
            .sort(([_, countA], [__, countB]) =>  countB - countA)
            .map(([n]) => n)
            .slice(0, k);
    }
}
