const connection = require('../data/configuration')

// INDEX
const index = (req, res) => {
    connection.query(`SELECT * FROM posts`, (err, results) =>{
        res.json(results)
    })
}
















module.exports = {
    index,
}