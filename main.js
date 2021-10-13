const fs = require('fs');
/**
 * 
 * @param {string} dir - Directory to file
 * @param {string} filename - Name of the converted file
 * @param {string} filetype - Filetype, "md" or "csv". If "md", it will convert the table to .csv. If "csv", it will convert the table to .md
 * @param {boolean} inline - Checks whether .md file contains other content or if whole file is a table
 * @param {string} ts - Table Start tag to search for to identify the start of a table
 * @param {string} te - Table End tag to search for to identify the end of a table
 */
function convertTable(dir, filetype, filename = "table", inline = false, mdts = '%%ts%%', mdte = '%%te%%'){
    let file;
    try {
        file = fs.readFileSync(dir, 'utf8').toString()
    } catch (err) {
        console.error(err);
    }
    let lineArray = file.split('\n')
    let content;
    if (filetype == 'md'){
        let rem = []
        if (inline){
            rem.push(lineArray.splice(0,1));
            rem.push(lineArray.splice(-1,1));
        };
        rem.push(lineArray.splice(1,1))
        content = convertArrayOfStrings(lineArray, filetype)
    }
    try {
        fs.writeFileSync("./table1.csv", content)
    } catch (error) {
        console.error(error)
    }
};
//convert array of strings to array of arrays. Array con
function convertArrayOfStrings(rowList, filetype){
    let tableArray = []
    let str_list = rowList;
    if (filetype == "md"){
        for (let i = 0; i < str_list.length; i++){
            tableArray.push(str_list[i].split("|").map(e => e.trim()).join(","));
        }
    }
    return tableArray.join('\n');
}
//convert array of arrays to file format

convertTable('movies.md','md', "table-1", true)
