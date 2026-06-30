class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        if (!strs.length) {
            return "";
        }

        return strs.map((s) => `${s.length}#${s}`).join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        if (!str.length) {
            return [];
        }

        const result: string[] = [];

        let left = 0;

        while (left < str.length) {
            let right = left;

            while (str[right] !== '#') {
                right++;
            }

            const length = Number.parseInt(str.substring(left, right), 10);

            left = right + 1;
            right = left + length;
            result.push(str.substring(right, left))
            left = right;
        }

        return result;
    }
}
