# Random Numbers with Exclusions

A JavaScript function for generating random numbers within a specified range, with the option to exclude specific values. This versatile utility is useful in scenarios requiring controlled randomness while allowing exclusions.

## Usage

```javascript
// Example usage:
console.log(randomNumbers(10));  // Generates a random number between 0 and 10 (inclusive).
console.log(randomNumbers(10, 100));  // Generates a random number between 10 and 100 (inclusive).
console.log(randomNumbers(10, { exclude: [1, 3, 6] }));  // Generates a random number between 0 and 10, excluding 1, 3, and 6.
console.log(randomNumbers(10, { exclude: { start: 3, end: 8 } }));  // Generates a random number between 0 and 10, excluding the range from 3 to 8.
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
