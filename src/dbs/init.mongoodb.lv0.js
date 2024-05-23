'use strict'

const mongoose = require('mongoose')

const connectString = `mongodb://localhost:27017/eCommerce`

mongoose.connect(connectString).then(_=> console.log(`Connect to mongoDb success`))
.catch(err => console.log('Error Connect'))

//dev
if(1===1){
    mongoose.set('debug', true)
    mongoose.set('debug', {color: true})

}

module.exports = mongoose