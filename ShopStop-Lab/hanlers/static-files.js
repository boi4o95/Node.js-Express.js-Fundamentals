const url = require('url')
const fs = require('fs')
const path = require('path')

function getContentType (url) {
    let type = url.split('.')

    if ( type[1] === 'ico') {
        return'image/x-icon'
    } else if (type[1]  === 'css') {
        return 'text/css'
    } else if (type[1] === 'jpg') {
        return 'image/jpeg'
    } else if (type[1] === 'jpeg') {
        return 'image/jpeg'
    } else if (type[1] === 'png') {
        return 'image/png'
    }
}

module.exports = (req, res) => {
    req.pathname =  req.pathname || url.parse(req.url).pathname

    if (req.pathname.startsWith('/content/') && req.method === 'GET') {
        let filePath = path.normalize(
            path.join(__dirname, `..${req.pathname}`))

        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.log(err)
                res.writeHead(404, {
                    'Content-Type': 'text/plain'
                })

                res.write('Resource not found!')
                res.end()
                return
            }
            res.writeHead(200, {
                'Content-Type': getContentType(req.pathname)
            })

            res.write(data)
            res.end()
        })
    } else {
        return true
    }
}