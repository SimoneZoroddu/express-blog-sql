const connection = require('../data/configuration')

// INDEX
const index = (req, res) => {

    const indexSql = `SELECT * FROM posts`

    connection.query(indexSql, (err, results) => {
        res.json(results)
    })

}

//DESTROY
const destroy = (req, res) => {

    const id = parseInt(req.params.id)

    const destroySql = `DELETE FROM posts WHERE id = ?`

    connection.query(destroySql, [id], (err, results) => {
        if (err) return res.status(500).json({ error: 'Failed to delete Post' })
        res.sendStatus(204)
    })
}


const show = (req, res) => {

    const { id } = req.params

    const showSql = `SELECT * FROM posts WHERE id = ?`

    const tagsSql = `
    SELECT T.*
    FROM tags AS T
    JOIN post_tag AS PT ON T.id = PT.tag_id
    WHERE PT.post_id = ?
    `

    connection.query(showSql, [id], (err, showResults) => {
        if (err) return res.status(500).json({ error: 'Post non trovato' })

        const singlePost = showResults[0];

        //console.log(singlePost);

        connection.query(tagsSql, [id], (err, tagsResults) => {
            if (err) return res.status(500).json({ error: 'database query error' })

            console.log(tagsResults);

            singlePost.label = tagsResults
            res.json(singlePost)

        })



    })

}













module.exports = {
    index,
    destroy,
    show
}