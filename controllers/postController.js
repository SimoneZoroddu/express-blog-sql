const connection = require('../data/configuration')

// INDEX
const index = (req, res) => {

    const indexSql = `SELECT * FROM posts`

    connection.query(indexSql, (err, results) =>{
        res.json(results)
    })

}

//DESTROY
const destroy = (req,res) => {

    const id = parseInt(req.params.id)

    const destroySql = `DELETE FROM posts WHERE id = ?`

    connection.query(destroySql, [id], (err, results) =>{
        if (err) return res.status(500).json({ error: 'Failed to delete Post'})
        res.sendStatus(204)
    })
}
















module.exports = {
    index,
    destroy,
}