function convertToRoman(num) {
  // Define the symbols and their corresponding values
  const symbols = [
    ['M', 1000], // 1000
    ['D', 500],  // 500
    ['C', 100],  // 100
    ['L', 50],   // 50
    ['X', 10],   // 10
    ['V', 5],    // 5
    ['I', 1]     // 1
  ];

  // Initialize an empty string to store the Roman numeral
  let roman = '';

  // Iterate through each symbol-value pair
  for (let i = 0; i < symbols.length; i++) {
    const symbol = symbols[i][0];
    const value = symbols[i][1];

    // Repeat the symbol while num is greater than or equal to its value
    while (num >= value) {
      roman += symbol;
      num -= value;
    }

    // Check for subtractive notation (e.g., IV, XL, CM)
    // This condition checks if the current symbol is at an even index and there are at least two more symbols ahead.
    if (i % 2 === 0 && i < symbols.length - 2) {
      // Get the next symbol and its value
      const nextSymbol = symbols[i + 2][0];
      const nextValue = symbols[i + 2][1];
      
      // Check if the difference between the next value and the current value is less than or equal to the remaining number
      // This condition checks if the current symbol can be subtracted from the next one.
      if (num >= nextValue - value) {
        // If it can be subtracted, add the combination of nextSymbol and symbol to the Roman numeral
        roman += nextSymbol + symbol;
        
        // Subtract the value of the combination from the remaining number
        // For example, if the current symbol is 'X' (value = 10) and the next symbol is 'C' (value = 100),
        // it means we're dealing with the subtractive notation for 90, which is 'XC'.
        num -= nextValue - value;
      }
    }
  }

  // Return the constructed Roman numeral
  return roman;
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
