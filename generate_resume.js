'use strict';
var resume = require('./resume.json');
var theme = require('jsonresume-theme-eloquent-mod');
var onePage = require('jsonresume-theme-onepage');
const fs = require('fs');
fs.writeFile("./index.html", theme.render(resume), err => {if (err) { console.error(err);}});

resume.work = resume.work.map(obj => {
	delete obj.summary;
	return obj;
});

fs.writeFile("./one-page/index.html", onePage.render(resume), err => {if (err) { console.error(err);}});
