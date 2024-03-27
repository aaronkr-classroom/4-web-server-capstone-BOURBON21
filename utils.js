//utils.js

"using strict";

//listion 7.5 (p.123)
const fs = require('fs'),
    httpStatus = require('http-status-codes'),
    contentTypes= require('./content-type');

module.exports = {
    getFile: (file, res) =>{
        fs.readFile(`./${file}`, (error, data) => {
            if(error) {
                res.writeHead(
                        httpStatus.INTERNAL_SERVER_ERROR, 
                        contentTypes.thml
                    );
                res.end("Error serving content!");
            }
            res.end(data);
        });
    }
}
