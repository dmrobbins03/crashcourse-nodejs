const fs = require('fs');
const path = require('path');

fs.access(path.join(__dirname, '/test'), (err) => {
    if (err) {
        fs.mkdir(path.join(__dirname, '/test'), {}, function (err) {
            if (err) throw err;
            console.log('Folder Created');
        });
    } else {
        fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World', (err) => {
            if (err) throw err;
            console.log('File written to...');

            fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ', eat this dlongus', (err) => {
                if (err) throw err;
                console.log('File appended!');

                fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'hello-world.txt'), (err) => {
                    if (err) throw err;
                    console.log('file renamed');

                    fs.readFile(path.join(__dirname, '/test', 'hello-world.txt'), 'utf8', (err, data) => {
                        if (err) throw err;
                        console.log(data);
                    });
                });
            });
        });
    }
});


