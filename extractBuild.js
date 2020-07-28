const extract = require('extract-zip');

exports.default = function (data) {
    console.log(data);
    if (data.platform.nodeName == 'win32') {
        try {
            extract('release/build-Win.zip', { dir: data.appDir });
            console.log('Extraction complete');
        } catch (err) {
            // handle any errors
        }
    }
    if (data.platform.nodeName == 'linux') {
        try {
            extract('release/build-Linux.zip', { dir: data.appDir });
            console.log('Extraction complete');
        } catch (err) {
            // handle any errors
        }
    }
    if (data.platform.nodeName == 'darwin') {
        try {
            extract('release/build-Mac.zip', { dir: data.appDir });
            console.log('Extraction complete');
        } catch (err) {
            // handle any errors
        }
    }
};
