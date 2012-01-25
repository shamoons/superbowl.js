fs = require('fs');


env = process.env.NODE_ENV || 'base';
confData = fs.readFileSync(__dirname + '/' + env + '.json', 'ascii');
confData = JSON.parse(confData);

//baseConf = JSON.parse(fs.readFileSync(__dirname + '/base.json', 'ascii'))

module.exports = confData;