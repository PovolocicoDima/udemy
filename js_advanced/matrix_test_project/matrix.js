const w = +prompt('Введите ширину матрицы'),
      h = +prompt('Введите высоту матрицы');

function matrix(w, h) {
    let result = new Array(h).fill().map(() => new Array(w).fill(""));

    let counter = 1;
    let startRow = 0;
    let endRow = h - 1;
    let startCol = 0;
    let endCol = w - 1;

    while(startRow <= endRow && startCol <= endCol) {
        for (let i = startCol; i <= endCol; i++) {
            result[startRow][i] = counter;
            counter++;
        }
        startRow++;
        for (let i = startRow; i <= endRow; i++) {
            result[i][endCol] = counter;
            counter++;
        }
        endCol--;
        for (let i = endCol; i >= startCol; i--) {
            result[endRow][i] = counter;
            counter++;
        }
        endRow--;
        for (let i = endRow; i >= startRow; i--) {
            result[i][startCol] = counter;
            counter++;
        }
        startCol++;
    }

    return result;
}

console.log(matrix(w, h));