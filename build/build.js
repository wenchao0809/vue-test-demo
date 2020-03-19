const webpack = require('webpack');
const prodConfig = require('./webpack.prod.conf');
const ora = require('ora');
const chalk = require('chalk');
const log = console.log;
const formatStats = require('./formatStats');

const spinner = ora('Building for production...').start();
// log(`
// CPU: ${chalk.red('90%')}
// RAM: ${chalk.green('40%')}
// DISK: ${chalk.yellow('70%')}
// `)
webpack(prodConfig).run((err, stats) => {
  if (err) {
    log(chalk.red(err.stack || err));
    if (err.details) {
      console.error(err.details);
    }
  } else {
    const info = stats.toJson();
    //   for (let i = 0; i <= 16; i++) {
    //     for (let j = 0; j <= 16; j++) {
    //       let code = String(i * 16 + j);
    //       console.log('\u001b[38;5;' + code + 'm ' + code);
    //     }
    //   }
    if (stats.hasErrors()) {
      console.log(info.errors);
      for(let item of info.errors) {
        console.error(item);
      }
    } else {
      // build success
      console.log('\n\n' + formatStats(stats, '/dist'));
      // console.log('\n\n' + chalk.black.bgGreen('Done') + ' ',  chalk.green(`Compiled successfully in ${stats.endTime - stats.startTime}ms`));
      // let names = Object.keys(stats.compilation.assets);
      // console.log('File\t\t\t\t\tSize\t\t\tGzipped\t\t\t');
      // for(let name of names) {
      //   console.log('/dist/' + name);
      //   console.log(stats.compilation.assets[name].size());
      // }
    }
    if (stats.hasWarnings()) {
      for(let item of info.errors) {
        console.error(item);
      }
    }
  }
  spinner.stop();
});
