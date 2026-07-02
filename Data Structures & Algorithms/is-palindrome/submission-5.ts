class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const n = s.length;

        if (!n || n === 1) {
            return true;
        }

        let left = 0;
        let right = n - 1;

        while (left < right) {
            console.log({ s, left, l: s[left], right, r: s[right] })

            while (!this.isAlphaNum(s[left]) && left < right) {
                left++;
            }

            while (!this.isAlphaNum(s[right]) && left < right) {
                right--;
            }

            console.log({ s, left, l: s[left], right, r: s[right] })

            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    }
    // isPalindrome(s: string): boolean {
    //     const clean = s.toLowerCase().replaceAll(/[^a-zA-Z0-9]/g, '');
    //     const n = clean.length;

    //     for (let i = 0; i < n; i++) {
    //         if (clean[i] !== clean[n - i - 1]) {
    //             return false;
    //         }
    //     }

    //     return true;
    // }

        /**
     * @param {char} c
     * @return {boolean}
     */
    isAlphaNum(c: string): boolean {
        return (
            (c >= 'A' && c <= 'Z') ||
            (c >= 'a' && c <= 'z') ||
            (c >= '0' && c <= '9')
        );
    }
}
