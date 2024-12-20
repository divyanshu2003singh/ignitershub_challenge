const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const filePath = './files/strings.txt'; // Replace with your text file

// Read and parse file content
const strings = fs.readFileSync(filePath, 'utf-8').split('\n').map(s => s.trim());

const getMatchesWithAllChars = (word, k = 3) => {
    // Convert input word to an array of characters
    const inputChars = word.split('');

    // Filter strings that contain all characters of the input word
    const matches = strings.filter(str => {
        const strChars = str.split('');
        return inputChars.every(char => strChars.includes(char));
    });

    return matches.slice(0, k); // Return top k matches
};

// Interactive Input
rl.question('Input >> ', input => {
    const suggestions = getMatchesWithAllChars(input);
    console.log(`Output >> ${suggestions.join(', ')}`);
    rl.close();
});
