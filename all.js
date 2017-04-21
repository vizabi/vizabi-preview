const shell = require('shelljs');


const [cmd] = process.argv.slice(2);
const command = cmd === 'ncu' ? `${cmd} -u` : cmd.split('-').join(' ').trim();

const packages = require('./packages').concat(command !== 'git push' ? 'vizabi-preview' : []);

if (command === 'git clone') {
  shell.cd('..');
  packages.forEach((pkg) => shell.exec(`${command} https://github.com/vizabi/${pkg}.git ${pkg}`));
} else {
  packages.forEach((pkg) => shell.exec(`cd ../${pkg}; ${command}`));
}
