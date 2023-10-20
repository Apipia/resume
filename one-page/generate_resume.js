'use strict';
var resume = require('../resume.json');
var theme = require('jsonresume-theme-onepage');
const fs = require('fs');
fs.writeFile("./index.html", theme.render(resume), err => {if (err) { console.error(err);}});
