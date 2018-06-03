const qs = require('querystring')
let movies = require('../config/dataBase')
const movieTemplate = require('../config/template').movieTemplate
const errorTemplate = require('../config/template').errorTemplate
const successTemplate = require('../config/template').successTemplate
const movieDetailsTemplate =  require('../config/template').movieDetailsTemplate
let moviePlaceholder = '{{replace-me}}'

module.exports = (req, res) => {
    let pathname = req.urlData.pathname

    if (pathname === '/movies/all') {
        switch (req.method){
            case 'GET':
              let  moviesHtml = movies
                    .map(m => movieTemplate(m.moviePoster))
                    .join('')
                res.view('views/viewAll.html', moviesHtml)
        }
    } else if (pathname === '/movies/add') {
        switch (req.method){
            case 'GET':
                res.view('views/addMovie.html')
            case 'POST':
                let movieData = req.bodyDat
                if (!movieData.moviePoster || !movieData.movieTitle) {
                    res.view('views/addMovie.html', errorTemplate)
                    return
                }
                movies.push(movieData)
                res.view('views/addMovie.html', successTemplate)
        }
    } else if (pathname.startsWith('/movies/details/')) {
        switch (req.method) {
            case 'GET':
                let index = pathname.substr(pathname.lastIndexOf('/') + 1)
                movies = movies[index]

                let movieHtml = movieDetailsTemplate
                    .replace('{{moviePoster}}', decodeURIComponent(movies.moviePoster))
                    .replace('{{movieTitle}}', decodeURIComponent(movies.movieTitle).replace(/\+/g, ' '))
                    .replace('{{movieYear}}', decodeURIComponent(movies.movieYear))
                    .replace('{{movieDescription}}', decodeURIComponent(movies.movieDescription).replace(/\+/g, ' '))
                res.view('views/details.html', movieHtml)
        }
    } else {
        return true
    }
}