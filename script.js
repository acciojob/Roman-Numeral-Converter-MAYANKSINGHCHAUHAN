function convertToRoman(num) {
    const romanNumerals = [
        ['M', 1000], ['CM', 900], ['D', 500], ['CD', 400],
        ['C', 100], ['XC', 90], ['L', 50], ['XL', 40],
        ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]
    ];
    
    let result = "";
    for (let [symbol, value] of romanNumerals) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }
    return result;
}

function convertNumber() {
    const numberInput = document.getElementById("numberInput").value;
    const number = parseInt(numberInput);
    const resultElement = document.getElementById("result");
    
    if (isNaN(number) || number < 0 || number > 100000) {
        resultElement.textContent = "Please enter a valid number between 0 and 100000.";
    } else if (number === 0) {
        resultElement.textContent = "Roman numerals do not have a representation for zero.";
    } else {
        resultElement.textContent = convertToRoman(number); // Removed "Roman numeral:" from output
    }
}
