const fs = require('fs');
fs.watch('./command.txt', (eventType, filename) => {
    
    if(eventType === 'change') {
        fs.readFile('./command.txt', (err, data) => {
            if(err) {
                console.log(err);
            } else {
                const body = [];
                body.push(data);
                const content = Buffer.concat(body).toString();
                console.log(content);
            }
        });

    }
});