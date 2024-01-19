# Random Numbers with Exclusions

A JavaScript function for generating random numbers within a specified range, with the option to exclude specific values. This versatile utility is useful in scenarios requiring controlled randomness while allowing exclusions.

## Usage

```javascript
// Example usage:
const randomNumbers = require('./index'); // Replace with the actual path to your file

// Example 1: Range from 1 to 1000, excluding the range from 200 to 300.
console.log(randomNumbers(1, 1000, { exclude: { start: 200, end: 300 } 

// Example 2: Range from 20 to 30, excluding values 22 and 25.
console.log(randomNumbers(20, 30, { exclude: [22, 25] }));

// Example 3: Range from 100 to 150, excluding the value 120.
console.log(randomNumbers(100, 150, { exclude: 120 }));

// Example 4: Range from -5 to 5, without exclusions.
console.log(randomNumbers(-5, 5));
```

## Notes

If `max` is not provided directly, the function assumes that `max` is equal to `min`, and `min` is equal to 0.
If `min` is greater than `max`, the values are automatically swapped.
Exclusion of values is applied before returning the random number.
If no numbers are available after exclusion, the function returns null.

## Contributions

Contributions are welcome! Feel free to open issues or pull requests for improvements or fixes.

## License

This project is licensed under the [MIT License](LICENSE).
