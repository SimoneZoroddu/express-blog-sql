const express = require('express')
const routesPost = require('./routes/posts')

const app = express()
const PORT = 3010


app.listen(PORT, () => {
    console.log(`Post API listening on http://127.0.0.1:${PORT}`);
})


app.use('/posts', routesPost)