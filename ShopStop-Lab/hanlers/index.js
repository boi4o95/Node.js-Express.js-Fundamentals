const homeHandler = require('./home')
const filesHandler = require('./static-files')
const productsHandler = require('./products')
const categoryHandler = require('./category')

module.exports = [ homeHandler, filesHandler, productsHandler, categoryHandler ]