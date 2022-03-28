const { Command } = require('commander')
const packageJson = require('./package.json')

const program = new commander.Command(packageJson.name)
  .version(packageJson.version)
  .arguments('<project-directory>') // 为最顶层命令指定命令参数
  .action((name) => {
    projectName = name
  }) // 添加命令处理函数
  .usage(`${chalk.green('<project-directory>')} [options]`) // 修改帮助信息中的首行提示信息
  // 添加选项
  .option('--verbose', 'print additional logs')
  .option('--scripts-version <alternative-package>', 'use a non-standard version of react-scripts')
  .option('--template <path-to-template>', 'specify a template for the created project')
  .option('--use-npm')
  .option('--use-pnp')
  .allowUnknownOption() // 允许输入未知选项。默认情况下在在命令行上输入未知的选项会提示异常。
  // .allowExcessArguments(false) // 过多参数将报错。默认情况下，传入过多的参数并不报错
  // 监听 `--help` 选项，输出自定义帮助信息
  .on('--help', () => {
    console.log(`    Only ${chalk.green('<project-directory>')} is required.`)
    // ... 省略其他 log
  })
  .parse(process.argv) // 解析命令行参数
// 使用选项参数
const { verbose, scriptsVersion, template, useNpm, usePnp } = program.opts()
// createApp(projectName, verbose, scriptsVersion, template, useNpm, usePnp)

// const program = require('commander')
// program
//   .version(`v${require('../package.json').version}`, '-v, --version')
//   .option('-a, --argu-test <name>', 'test option function -- agru test', 'default value')
//   .action((env, options, ddd) => {
//     env = env || 'all'
//     console.log('read ', env)
//     // console.log('setup', env, options)
//   })

// //通过arguments可以为最顶层命令指定参数。如下代码：
// // // 带参数
// // program.option('-m, --first  <name>', 'test option function -- agru test', 'default value')

// // // 声明可变参数，可变参数会以数组的形式传递给处理函数。

// // 单一命令可以打印出下面的option
// program
//   .command('start <name> [options...]')
//   //   .arguments('<project-directory>')
//   .description('start a commander')
//   .option('-m, --first  <name>', 'test option function -- agru test', 'default value')
//   .action((env, options, ddd) => {
//     env = env || 'all'
//     console.log('read ', ddd)
//     console.log('setup', env, options)
//   })

// // //program.args[0] 后面跟着参数
// // //获取参数

// program.parse(process.argv)
// // const options = program.opts()
// // console.log(options, ';options')
