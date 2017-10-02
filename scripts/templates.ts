import * as shell from 'shelljs';

const sdkTemplatesPath = `${__dirname}/../src/sdk-templates`;
const srcPath = `${sdkTemplatesPath}/tmp`;
const destPath = `./dist`;

shell.exec(`tsc -p ${sdkTemplatesPath}/tsconfig.json`);

shell.mkdir('-p', destPath);

shell.mv(`${srcPath}/typescript.d.ts`, `${destPath}/typescript.d.ts.tpl`);
shell.mv(`${srcPath}/typescript.js`, `${destPath}/typescript.js.tpl`);

shell.rm('-rf', srcPath);

shell.exec('echo Done.')

