const fs = require('fs');

// create new file and add content if not exist or overwrite content of file
fs.writeFileSync('notes.txt', 'Hello Nodejs.'); 
// append content on file
fs.appendFileSync('notes.txt', " I'm Nodejs.");

// -------- Three ways to work with file -------- //

// -------- Callback API -------- //
fs.writeFile('notes1.txt', 'Hello from callback', error => {
    if(error) {
        console.log(error);
    }
});
// -------- Synchrounious API -------- //
fs.writeFileSync('notes2.txt', 'Hello from Synchrounious');
// -------- Prmise API -------- //
const fsPromise = require('fs/promises');
(async() => {
    try {
        await fsPromise.writeFile('notes.txt', 'Hello from promise');
    } catch (error){
        console.log(error);
    }
})();