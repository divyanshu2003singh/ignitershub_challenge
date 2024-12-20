const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const isPalindrome = str => {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/gi, '');
    return cleaned === cleaned.split('').reverse().join('');
};

// Interactive Input
rl.question('Enter a string: ', input => {
    if (isPalindrome(input)) {
        console.log(`The string '${input}' is a palindrome.`);
    } else {
        console.log(`The string '${input}' is not a palindrome.`);
    }
    rl.close();
});
