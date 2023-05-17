const os = require('os');

console.log('Platform:', os.platform());
console.log('Release:', os.release());
console.log('Hostname:', os.hostname());
console.log('Home Directory:', os.homedir());
console.log('Total Memory:', os.totalmem());
console.log('Free Memory:', os.freemem());
console.log('Network Interfaces:', os.networkInterfaces());
console.log('CPU Information:', os.cpus());
