const fs = require('fs')
const Image = require('mongoose').model('Image')
const Tag = require('mongoose').model('Tag')

module.exports = (req, res) => {
    if (req.pathname === '/search') {
        fs.readFile('./views/results.html', 'utf8', (err, html) => {
            if (err) {
                throw err
            }
            Image.find({}).then(data => {
                let imageHtml = ''
                for (let image of data) {
                    imageHtml += `
                    <fieldset id ="${image._id}">
                        <img src="${image.url}"> </img>
                        <p>${image.description}<p/>
                        <button onclick='location.href="/delete?id=${image._id}"'class='deleteBtn'>Delete
                        </button> 
                    </fieldset>`
                }
                html = html.replace('<div class="replaceMe"></div>', imageHtml)

                res.writeHead(200, {
                    'content-type': 'text/html'
                })
                res.write(html)
                res.end()
            })
        })

    } else {
        return true
    }
}

