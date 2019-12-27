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
