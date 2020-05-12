const axios = require("axios")

module.exports = {
    findByTitle: function(req, res) {
        const title = req.params.title
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + title).then(function(results){
            res.json(results.data);
        })
       
    },

}