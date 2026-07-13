class Solution {
    map = {
        '[': ']',
        '(': ')',
        '{': '}',
    }
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const n = s.length;

        if (!n || n % 2 !== 0) {
            return false;
        }

        const stack = [];

        for (let c of s) {
            if (c in this.map) {
                stack.push(this.map[c]);
            } else if (stack.pop() !== c) {
                return false;
            }
        }

        return !stack.length;
    }
}
