// Function to convert a decimal number to Roman numeral
function convertToRoman(num) {
    // Array of Roman numeral symbols and their corresponding decimal values
    const romanSymbols = [
        ['M', 1000], 
        ['CM', 900], 
        ['D', 500], 
        ['CD', 400], 
        ['C', 100], 
        ['XC', 90], 
        ['L', 50], 
        ['XL', 40], 
        ['X', 10], 
        ['IX', 9], 
        ['V', 5], 
        ['IV', 4], 
        ['I', 1]
    ];

    let result = ''; // Initialize the result string

    // Loop through each Roman numeral symbol starting from the largest
    for (let i = 0; i < romanSymbols.length; i++) {
        // While the number is larger than or equal to the Roman numeral value
        while (num >= romanSymbols[i][1]) {
            result += romanSymbols[i][0]; // Append the Roman symbol
            num -= romanSymbols[i][1]; // Subtract the corresponding value
        }
    }

    return result; // Return the Roman numeral
}

// Function that gets the input value and triggers the conversion
function convert() {
    const inputNumber = document.getElementById('inputNumber').value; // Get the input value
    const resultDiv = document.getElementById('result'); // Get the result div

    if (inputNumber === '' || inputNumber < 0 || inputNumber > 100000) {
        resultDiv.textContent = 'Please enter a valid number between 0 and 100000';
    } else {
        const romanNumeral = convertToRoman(parseInt(inputNumber)); // Convert the number to Roman numeral
        resultDiv.textContent = `Roman Numeral: ${romanNumeral}`; // Display the result
    }
}
