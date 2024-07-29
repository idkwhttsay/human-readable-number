module.exports = function toReadable (number) {
    let nums = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: "four",
        5: 'five',
        6: 'six',
        7: "seven",
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
    };

    let tens = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    }

    if(number < 20) {
        return nums[number];
    }

    if(number < 100) {
        let result = '';
        result = `${tens[Math.floor(number/10)]}`;
        if(number%10 > 0) {
            result = `${result} ${nums[Math.floor(number%10)]}`;
        }

        return result;
    }

    let result = '';
    result = `${nums[Math.floor(number/100)]} hundred`;
    if(Math.floor(number/10)%10 === 1) {
        result = `${result} ${nums[number%100]}`;
    } else if (Math.floor(number/10)%10 > 1) {
        result = `${result} ${tens[Math.floor(number/10)%10]}`;
    }

    if(Math.floor(number/10)%10 !== 1){
        if(number%10 > 0) {
            result = `${result} ${nums[number%10]}`;
        }
    }

    return result;
} 
