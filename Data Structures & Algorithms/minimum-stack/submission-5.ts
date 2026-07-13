class MinStack {
    private min = [];
    private stack = [];

    constructor() {}

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val);
        
        const min = this.min.at(-1);

        if (min === undefined || min >= val) {
            this.min.push(val)
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
        const val = this.stack.pop();
        const min = this.min.at(-1);

        if (val === min) {
            this.min.pop();
        }
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack.at(-1);
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.min.at(-1);
    }
}
