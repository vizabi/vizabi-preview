const shell = require('shelljs');


const command = process.argv.slice(2).join(' ').trim();

const packages = require('./packages').concat(!command.startsWith('git push') ? 'vizabi-preview' : []);

const execAsync = (command) => shell.exec(command, { async: true, silent: true }, (_, stdout, stderr) => {
  console.log(
    [
      `command: ${command}`,
      `stdout: ${stdout}`,
      `stderr: ${stderr}`,
      '-----------------------'
    ].map(m => m.trim()).join('\n')
  );
});

if (command.startsWith('git clone')) {
  shell.cd('..');
  packages.forEach((pkg) => execAsync(`${command} https://github.com/vizabi/${pkg}.git ${pkg}`));
} else if (command.startsWith('npm link')) {
  packages.forEach((pkg) => execAsync(`${command} ../${pkg}`));
} else {
  packages.forEach((pkg) => execAsync(`cd ../${pkg} && ${command}`));
}
