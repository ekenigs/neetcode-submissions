class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rows = Array.from({ length: 9 }, () => new Set<string>());
        const columns = Array.from({ length: 9 }, () => new Set<string>())
        const squares = Array.from({ length: 9 }, () => new Set<string>())

        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                const cur = board[row][col];
                const square = Math.floor(row / 3) * 3 + Math.floor(col / 3);

                if (cur === '.') continue;

                if (rows[row].has(cur)
                    || columns[col].has(cur)
                    || squares[square].has(cur)
                ) {
                    return false;
                }

                rows[row].add(cur);
                columns[col].add(cur)
                squares[square].add(cur)
            }
        }

        return true;
    }
}
