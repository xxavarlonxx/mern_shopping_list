const express = require('express')
const mongoose = require('mongoose')
if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const items = require('./routes/api/items')


const app = express()

app.use(express.json())
//app.use(express.urlencoded(ex))

//db config
mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser: true, useUnifiedTopology:true })
    .then(() => console.log('MongoDB connected'))
    .catch(error => console.error(error));

app.use('/api/items', items)

const port = process.env.PORT || 5000
app.listen(port, () => `Server started on port ${port}`)