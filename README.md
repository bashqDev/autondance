# Autondance

## What does it do?
It can take attendance semi-automatically at online meetings.

## Prequisites
- Node.js v.14.15.1 or higher
- NPM v.6.14.8
- A command line interface (PowerShell/bash/zsh)

## Usage and configuration
Modifying the fields in "config.json" should get you started right away
`allstudents`: Put in the list of your students in an array format.

`lang`: Put in the language of your text according to [this table.](https://tesseract-ocr.github.io/tessdoc/Data-Files#data-files-for-version-400-november-29-2016)

`imagePath`: Put in the path to your image that has the list of current students. 

Running `node .` after modifying `config.json` in a command line interface should give you the output of what Tesseract (the OCR) saw and who's missing according to it.