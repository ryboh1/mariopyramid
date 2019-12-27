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
    function thePrompt()
    {
        rl.question("Enter a Number from 1 - 8: \n",(answer) =>
        {
            // If not Number re-prompts user
            if(isNaN(answer))
            {
                thePrompt();
            }

            theAnswer = parseInt( answer );

            //if not between 1-8 re-prompts user
            if(theAnswer > 0 && theAnswer < 9)
            {
                rl.close;
                resolve.apply("done");
            }
            else
            {
                thePrompt();
            }
        }
        );
    }

    thePrompt();
});


thePromise.then((result) =>
{
    // Builds the Mario Pyramid
    prompt.marioPyramid(theAnswer);

});

