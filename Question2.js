function Question2(numbers) {
    return numbers.filter(number => number % 2 === 0);
}

const inputArray = [1, 2, 3, 4, 5, 6];
const evenNumbers = Question2(inputArray);
console.log(evenNumbers); 