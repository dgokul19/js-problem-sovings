// findLongestWordLength("The quick brown fox jumped over the lazy dog") should return a number.

    const findLongestWordLength = ( stringArray ) => {
        let result = 0;
        stringArray.split(' ').forEach(element => {
            if(element.length > result) {
                result = element.length
            }
        });
        return result;
    };


console.log(findLongestWordLength("The quick brown fox jumped overres the lazy dog"));