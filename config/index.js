fs = require('fs');


env = process.env.NODE_ENV || 'base';
confData = fs.readFileSync(__dirname + '/' + env + '.json', 'ascii');
confData = JSON.parse(confData);

module.exports = confData;