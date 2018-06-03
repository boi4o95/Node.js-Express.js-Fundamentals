const storage = require('./storage')

storage.load()
storage.put('first','firstValue')
storage.put('second','secondValue')
storage.put('third','thirdValue')
storage.put('fouth','fourthValue')
console.log(storage.get('first'))
console.log(storage.getAll())
storage.delete('second')
storage.update('first','updatedFirst')
storage.save()
storage.clear()
console.log(storage.getAll())
storage.load().then(() => {
    console.log(storage.getAll())
}).catch(err => console.log(err))

