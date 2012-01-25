fs = require('fs');

baseConf = JSON.parse(fs.readFileSync(__dirname + '/base.json', 'ascii'))

module.exports = baseConf;