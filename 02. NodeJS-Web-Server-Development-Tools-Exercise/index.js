const http = require('http')
const url = require('url')

const attachFileReader = require('./config/fileReader')
const attachPostParser = require('./config/postParser')
const handlers = require('./handlers')
const port = 9999

function framework(req, res) {
    console.log(req.url)

    req.urlData = url.parse(req.url)
    attachFileReader(res)

    attachPostParser(req, res)
        .then(postData => {
            for (let handler of handlers) {
                if (handler(req, res) !== true) {
                    break;
                }
            }
    })

}

let server = http.createServer(framework)
server.listen(port)

console.log(`Server listening on port ${port}`)