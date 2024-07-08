function add(numbers) {
    
    if (!numbers) {
        return 0;
    }
    
    if (typeof numbers !== 'string') {
        return 'please provide a valid string';
    }

    let delimiter = ',';
    if (numbers.startsWith('//')) {
        const delimiterLineEnd = numbers.indexOf('\n');
        delimiter = numbers.substring(2, delimiterLineEnd);
        numbers = numbers.substring(delimiterLineEnd + 1);
    }

    let delimiterRegex = new RegExp(`[${delimiter}\n]`);
    let nums = numbers.split(delimiterRegex);

    let negatives = nums.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(',')}`);
    }

    return nums.reduce((sum, num) => sum + parseInt(num || 0), 0);
}

// Sample output

console.log(add('')) // Output: 0
console.log(add('1')) // Output: 1
console.log(add('1,5')) // Output: 6
console.log(add('1\n2,3')) // Output: 6
console.log(add('//;\n1;2')) // Output: 3