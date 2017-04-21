const shell = require('shelljs');


const command = process.argv.slice(2).join(' ').trim();

const packages = require('./packages').concat(!command.startsWith('git push') ? 'vizabi-preview' : []);

if (command.startsWith('git clone')) {
  shell.cd('..');
  packages.forEach((pkg) => shell.exec(`${command} https://github.com/vizabi/${pkg}.git ${pkg}`));
} else {
  packages.forEach((pkg) => shell.exec(`cd ../${pkg}; ${command}`));
}
