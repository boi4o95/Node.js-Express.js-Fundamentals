let defaultErrorRes = (res, err) => {
    console.log(err.message)
    res.writeHead(404, {
        'content-type': 'text/plain'
    })
    res.write('Resource not found!')
    res.end()
}

let defaultSuccessRes = (res, data) => {
    res.writeHead(200,{
        'content-type': 'text/html'
    })
    res.write(data)
    res.end()
}

let generateHtmlBody = (memes, data) => {
    let htmlBody = []

    for (let meme of memes) {
        if (meme.privacy) {
            htmlBody.push(`
                <div class="meme">
                      <a href="/getDetails?id=${meme.id}">
                      <img class="memePoster" src="${meme.memeSrc}"/>          
                 </div>`
            )
        }
    }
    return data.replace('<div id="replaceMe">{{replaceMe}}</div>', htmlBody)
}

let generateDetailsHtml = (targetedMeme, data) => {
    let replace = `
    <div class="content">
          <img src="${targetedMeme.memeSrc}" alt=""/>
          <h3>Title  ${targetedMeme.title}</h3>
          <p> ${targetedMeme.description}</p>
          <button><a href="${targetedMeme.memeSrc}">Download Meme</a></button>
    </div>`

    let html = data.replace('<div id="replaceMe">{{replaceMe}}</div>', replace)
    return html
}

module.exports = {
    defaultErrorRes: defaultErrorRes,
    defaultSuccessRes: defaultSuccessRes,
    generateHtmlBody: generateHtmlBody,
    generateDetailsHtml: generateDetailsHtml
}