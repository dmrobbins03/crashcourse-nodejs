const path = require('path');

class PathReference {
    constructor() {
        console.log(__filename, __dirname);
        console.log(path.basename(__filename), path.dirname(__filename), path.parse(__filename));
    }
}

module.exports = PathReference;