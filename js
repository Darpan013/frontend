// function isPrime(num) {
//     // Check if the number is less than 2
//     if (num <= 1) {
//         return false; // 0 and 1 are not prime numbers
//     }
//     // Check for factors from 2 to the square root of num
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false; // num is divisible by i, hence not prime
//         }
//     }
//     return true; // num is prime
// }

// // Example usage:
// const number = 29; // Change this number to test
// if (isPrime(number)) {
//     console.log(`${number} is a prime number.`);
// } else {
//     console.log(`${number} is not a prime number.`);
// }