const fs = require('fs');
const math = require('mathjs');

const inputFile = './files/expressions.txt'; // Replace with your input file
const outputFile = './files/output.txt';

// Read and process the file
const expressions = fs.readFileSync(inputFile, 'utf-8').split('\n').map(line => line.trim());

console.log('Expressions read from file:');
console.log(expressions); // Log the expressions being read

const results = expressions.map(expr => {
    try {
        const [left, _] = expr.split('=');
        const value = math.evaluate(left.trim());
        return `${expr.trim()} ${value}`;
    } catch (error) {
        return `${expr.trim()} Error`;
    }
});

console.log('Results to write to output file:');
console.log(results); // Log the results

// Write results to a file
fs.writeFileSync(outputFile, results.join('\n'));
console.log(`Results written to ${outputFile}`);
