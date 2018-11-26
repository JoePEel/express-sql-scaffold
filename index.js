const express = require('express');
const app = express();
const helmet = require('helmet')
const port = 3000;


app.use(express.json())
app.use(express.urlencoded())
app.use(helmet())

app.get('/', (req, res) => {
    res.json('Hello World')
})



app.listen(port, () => {console.log('Listening fds')})