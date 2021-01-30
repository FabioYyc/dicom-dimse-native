
const addon = require('./index');

var connectString =process.argv[2]

function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}


// create a buffer
const buff = Buffer.from(connectString, 'base64');

// decode buffer as UTF-8
const connectStringDecoded= buff.toString('utf-8');



addon.echoScu((connectStringDecoded
), (result) => {
        if (result && result.length > 0 && IsJsonString(result)) {
            try
            {
                console.log(result);
            }
            catch (e) {
                console.log(e, result);
            }
        }
});