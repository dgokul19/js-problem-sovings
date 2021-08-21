// Find the duplicate number in ana integer array 
// [11,2,5,6,4,2] should return 2

    // Method 1: ES6
const duplicateNumber = (arraySet) => {
    let result = {};
    let response;
    arraySet.forEach(element => {
        let value = result[element] ? result[element] + 1  : 1;
        if(value > 1){
            response = value;
        }
        result[element] = value;
    });
    return response;
};

console.log(duplicateNumber([11,2,5,2,4,6]));