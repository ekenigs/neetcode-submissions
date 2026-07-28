class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        let n = matrix[0].length
        let m = matrix.length;
        let left = 0;
        let right = n * m - 1;

        while (left <= right) {
            const mid = right - Math.floor((right - left) / 2);
            const row = Math.trunc(mid / n);
            const col = mid % n;
            const cur = matrix[row][col];

            if (cur === target) {
                return true;
            } else if (cur < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return false;
    }
}
