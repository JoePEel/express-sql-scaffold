const express = require('express');
const app = express();
const helmet = require('helmet')
const port = 3000;
const rootRouter = require('./routes/root.js')


app.use(express.json())
app.use(express.urlencoded())
app.use(helmet())

app.get('/', rootRouter)


app.listen(port, () => {console.log('Listening fds')})