const staticHandler = require('./staticHandler')
const errorHandler = require('./errorHandler')
const homeHandler = require('./homeHandler')
const moviesHandler = require('./movieHandlers')

module.exports = [
    homeHandler,
    moviesHandler,
    staticHandler,
    errorHandler
]