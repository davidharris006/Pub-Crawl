var connection = require("./connection.js")

var orm = {
    selectAll: function (cb) {
        connection.query(
            `SELECT *
            FROM beer
            FULL JOIN breweries
            ON brewery_id = breweries.id
            ORDER BY brewery_id;`, function (err, res) {
                if (err) {
                    console.log(error)
                    res.sendStatus(500)
                }

                cb(res);

            });
    },

    selectOne: function(search, cb){
        console.log("orm search", search)
        connection.query(
            `SELECT *
            FROM beer
            FULL JOIN breweries
            ON brewery_id = breweries.id
            WHERE ${search.searchType} LIKE '%${search.searchTerm}%';`, function (err, res) {
                console.log("res", res)
                console.log("err", err)
                
                if (err) {
                    res.sendStatus(500)
                }

                cb(res);

            });
}


};

module.exports = orm;
