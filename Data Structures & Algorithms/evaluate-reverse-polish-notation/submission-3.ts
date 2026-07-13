class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        if (!tokens) {
            return 0;
        }

        const stack = [];
        const operators = new Set(["+", "-", "*", "/"])

        for (let t of tokens) {
            if (!operators.has(t)) {
                stack.push(t);
            } else {
                const second = stack.pop();
                const first = stack.pop();

                stack.push(Math.trunc(eval(`${first} ${t} ${second}`)));
            }
        }

        return stack[0];
    }
}
