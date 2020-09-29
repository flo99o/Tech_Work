const express = require ('express');
const app = express ();
const router = require ('./routes/index')
const bodyParser = require ('body-parser')
var cors = require('cors')
const morgan = require('morgan')

const port = process.env.PORT || 5000

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


app.use('/', router.users)
app.use('/', router.admin)
app.use('/', router.compagny)
app.listen(port, () => {
    console.log (`listening on port ${port}`)
})





