const isPrime = (num) => {
    if (num <= 1) {
        return false; // 0 and 1 are not prime numbers
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // If num is divisible by any number between 2 and sqrt(num), it's not prime
        }
    }

    return true; // If no divisors found, num is prime
};

let res = isPrime(19);

if (res) {
    console.log("Number is prime");
} else {
    console.log("Number is not prime");
}
