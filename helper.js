exports.marioPyramid = (pyramidHeight) =>
{
    spaces = pyramidHeight - 1;

    for(let i = 0; i < pyramidHeight; i++)
    {
        let pyramidBlocks = "";
        theSpaces =  " ".repeat(spaces);

        pyramidBlocks += theSpaces;
        pyramidBlocks += "#".repeat(((i + 1) * 2) - 1);
        pyramidBlocks += theSpaces;

        console.log(pyramidBlocks);
        spaces --;
    }
};