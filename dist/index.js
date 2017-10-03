"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var Promise = require("bluebird");
var readFile = function (path) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, 'utf-8', function (err, content) {
            if (err) {
                reject(err);
            }
            else {
                resolve(content);
            }
        });
    })
        .then(function (s) { return s; });
};
exports.getSDKTemplates = function () {
    return Promise.all([
        readFile(__dirname + '/typescript.js.tpl'),
        readFile(__dirname + '/typescript.d.ts.tpl'),
    ])
        .then(function (_a) {
        var js = _a[0], tsd = _a[1];
        return ({ js: js, tsd: tsd });
    });
};
