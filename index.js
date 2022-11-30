const express = require('express')
const app = express()
app.get('/', (req, res) =>{
    res.send('hello pppppp')
})

app.get('/api', (req,res) =>{
    res.json({
        code:0,
        message:'api anjay'
    })
})

app.listen(process.env.PORT || 3000)
