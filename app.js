const readline = require("readline");
const prompt = require("./helper");
let theAnswer;

const rl = readline.createInterface(
{
    input:process.stdin, 
    output:process.stdout
});

let thePromise = new Promise((resolve, reject) => 
{
    // Prompts user for a Number
    prompt.promptsNumber(rl, resolve);
});


thePromise.then((result) =>
{
    // Builds the Mario Pyramid
    prompt.marioPyramid(result);

});

