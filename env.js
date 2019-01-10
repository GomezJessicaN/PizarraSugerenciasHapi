var fs = require('fs')
var argv = require('yargs').argv
require('dotenv').config();

const sourcePath = argv.sourcePath
const targetPath = argv.targetPath

var envConfigFile = fs.readFileSync(sourcePath).toString()
for (envvar of Object.keys(process.env)) {
    var result = process.env[envvar].replace(/\\/g, "\\\\")
    envConfigFile = envConfigFile.replace("(process.env." + envvar + ")", "\"" + result + "\"")
}
fs.writeFileSync(targetPath, envConfigFile)

console.log(`Output generated at ${targetPath}`);