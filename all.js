const shell = require('shelljs');

let command = process.argv.slice(2).join(' ').trim();
if (command == "ncu" && process.env.npm_config_u) command = "ncu -u";
if (command == "ncu" && process.env.npm_config_a) command = "ncu -a";
if (command == "git commit" && process.env.npm_config_message) command = 'git commit -m "' + process.env.npm_config_message + '"';
if (command == "git add" && process.env.npm_config_message) command = 'git add --all';

const packages = require('./packages');

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
