class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const clean = s.toLowerCase().replaceAll(/[^a-zA-Z0-9]/g, '');
        const n = clean.length;

        for (let i = 0; i < n; i++) {
            if (clean[i] !== clean[n - i - 1]) {
                return false;
            }
        }

        return true;
    }
}
