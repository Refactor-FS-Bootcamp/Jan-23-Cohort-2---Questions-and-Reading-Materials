const fs = require('fs');

const writeAndappend = function() {
    console.log('Writing and appending to a file');
    fs.writeFileSync('notepad.txt', 'I live in Bhopal.');
    fs.appendFileSync('notepad.txt', ' And i train students.');
}

module.exports = writeAndappend