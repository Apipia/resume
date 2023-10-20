'use strict';
var resume = require('./resume.json');
var theme = require('jsonresume-theme-eloquent-mod');
const fs = require('fs');
fs.writeFile("./index.html", theme.render(resume), err => {if (err) { console.error(err);}});
