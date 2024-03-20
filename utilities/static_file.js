
const{mineTypes}=require('./mime');


module.exports.staricFile = function (res, filePath, ext) {
    res.setHeader('Content-Type', MimeTypes[ext]);
    fs.readFile ('./public'+filePath, (error,data) => {
        if (error) {
            res.statusCode = 404;
            res.end();
        }
        res.end(data);
    });
}