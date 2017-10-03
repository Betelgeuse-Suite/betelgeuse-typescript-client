import * as fs from 'fs';
import * as Promise from 'bluebird';

const readFile = (path: string) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, content) => {
      if (err) {
        reject(err);
      } else {
        resolve(content);
      }
    })
  })
    // 'hard code' the type
    .then(s => <string>s);
}


export const getSDKTemplates = () => {
  return Promise.all([
    readFile(__dirname + '/typescript.js.tpl'),
    readFile(__dirname + '/typescript.d.ts.tpl'),
  ]);
}