const fs = require('fs')
const path = './storage.json'

let storage = {}

function checkIfString(val) {
    if (typeof val !== 'string') {
        throw new Error('The input key should be a string!')
    }
}

function checkIfExists(val) {
    if (!storage.hasOwnProperty(val)) {
        throw new Error('The key does not exist!')
    }
}

module.exports = {
    put: (key, value) => {
        checkIfString(key)
        if (storage.hasOwnProperty(key)) {
            throw new Error('The key already exists!')
        }

        storage[key] = value
    },
    get: (key) => {
        checkIfString(key)
        checkIfExists(key)

        return storage[key]
    },
    getAll: () => {
        if (Object.keys(storage).length === 0) {
            return 'The storage has no records!'
        } else {
            return storage
        }
    },
    update: (key, newValue) => {
        checkIfString(key)
        checkIfExists(key)

        storage[key] = newValue
    },
    clear: () => {
        storage = {}
    },
    delete:(key) => {
        checkIfString(key)
        checkIfExists(key)

        delete storage[key]
    },
    load: () => {
        return new Promise((resolve, reject) => {
            let data = fs.readFile(path, (err, data) => {
                if (err) {
                    reject(err)
                    console.dir(err)
                    return
                }

                storage = JSON.parse(data)
                resolve()
            })
        })
    },
    save: () => {
        return new Promise((resolve, reject) => {
            let data = fs.writeFile(path,JSON.stringify(storage), (err, data) => {
                if (err) {
                    reject(err)
                    console.dir(err)
                    return
                }

                storage = JSON.stringify(data)
                resolve()
            })
        })
    }
}