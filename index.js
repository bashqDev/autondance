var Tesseract   = require('tesseract.js');
var config      = require('./config.json');
var allStudents = config.allStudents;

Tesseract.recognize(
    config.imagePath,
    config.lang,
    {}
  ).then(({ data: { text } }) => {
    console.log("What Tesseract saw")
    console.log(text);

    let absent = allStudents.filter(x => !text.includes(x));
    console.log("The students that seem to be missing");
    console.log(difference);
  })