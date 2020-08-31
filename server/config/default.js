// Define your configurations
const mongoose = require('mongoose')
import { env } from '../../env.json'

let password = env.password
let dbname = env.dbname

let uri = `mongodb+srv://root:${password}@fwdgg.sj1jp.mongodb.net/${dbname}?retryWrites=true&w=majority`

console.log(uri)

// let db = mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

module.exports = { uri }