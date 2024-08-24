function convertToRoman(num) {
  	const romanNumerals = [
      ['M',1000], 
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

  //your code here
	let result = '';

	for(let i = 0; i < romanNumerals.length; i++)
		{
			const [symbol, value] = romanNumerals[i];
        while (num >= value) {
            result += symbol;
            num -= value;
			}
		}
	return result;
}

// Test cases  
console.log(convertToRoman(14));  // XIV
console.log(convertToRoman(798)); // DCCXCVIII


// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(convertToRoman(36));

// do not edit below this line
module.exports = convertToRoman
