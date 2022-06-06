let matrix = [];
 
 for (let i = 0; i < 3; i += 1) {
    let array = [];
    for (let i = 1; i < 6; i += 1) {
        array.push(i);
    }
    matrix.push(array);
 }

 console.log('Матрица ', matrix);