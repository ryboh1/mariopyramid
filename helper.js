exports.promptsNumber = function recursive (theRL,theResolve )
    {
        theRL.question("Enter a Number from 1 - 8: \n",(answer) =>
        {
            // If not Number re-prompts user
            if(isNaN(answer))
            {
                recursive(theRL, theResolve);
            }

            let theAnswer = parseInt( answer );

            //if not between 1-8 re-prompts user
            if(theAnswer > 0 && theAnswer < 9)
            {
                theRL.close();
                theResolve(theAnswer);
            }
            else
            {
                recursive(theRL, theResolve);
            }
        }
        );
    }


exports.marioPyramid = (pyramidHeight) =>
{
    spaces = pyramidHeight - 1;

    for(let i = 0; i < pyramidHeight; i++)
    {
        let pyramidBlocks = "#".repeat(((i + 1) * 2) - 1);
        let theSpaces =  " ".repeat(spaces);

        pyramid = theSpaces + pyramidBlocks + theSpaces;

        console.log(pyramid);
        spaces --;
    }
};
