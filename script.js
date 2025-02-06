document.getElementById("convertBtn").addEventListener("click", function () {
  const numberInput = document.getElementById("numberInput").value;
  const resultElement = document.getElementById("result");

  if (numberInput === "" || numberInput < 0 || numberInput > 100000) {
    resultElement.textContent = "Please enter a valid number between 0 and 100000.";
    return;
  }

  const romanNumeral = convertToRoman(parseInt(numberInput));
  resultElement.textContent = romanNumeral; // Display only the Roman numeral
});

function convertToRoman(num) {
  const romanSymbols = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];

  let result = "";

  for (const [symbol, value] of romanSymbols) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}