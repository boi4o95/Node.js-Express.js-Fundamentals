const homeControllers = require('./home')
const productsControllers = require('./products')
const categoryControllers = require('./category')
const userControllers = require('./user')

module.exports = {
    home: homeControllers,
    product: productsControllers,
    category: categoryControllers,
    user: userControllers
}