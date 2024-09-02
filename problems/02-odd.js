const odd = (num) => {
    if (num % 2 === 0) {
        return "even";
    } else if (num % 2 === 1) {
        return "odd";
    } else {
        return "invalid";
    }
};

let res = odd(19);
console.log(res);
