const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('Brightfolio_AI_Agent_KB_v4 (3) (1).pdf');

pdf(dataBuffer).then(function(data) {
    console.log(data.text);
}).catch(err => {
    console.error(err);
});
