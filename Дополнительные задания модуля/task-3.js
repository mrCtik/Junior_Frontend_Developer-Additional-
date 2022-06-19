
const unique = (array) => {
    const newArray = [];
    for (let i = 0; i < array.length; i += 1) {
        if (!newArray.includes(array[i])) {
            newArray.push(array[i]);
          }
    }
    console.log(newArray);
}

unique([1, 1, 2, 2, 4, 2, 3, 7, 3]); // => [1, 2, 4, 3, 7]
