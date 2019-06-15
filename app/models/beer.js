var orm = require("../config/orm");


var beer = {
    selectAll: function (cb) {
        orm.selectAll(function (res) {
            cb(res);
        });
    },
    selectOne: function (searchterm, searchtype, cb){
        orm.selectOne(searchterm, searchtype, function(res){
            cb(res);
        })
    },
    surveyQuestions: function (survey, cb){
        orm.surveyQuestions(survey, function(res){
            cb(res);
        })
    }
    // The variables cols and vals are arrays.
    //   create: function(cols, vals, cb) {
    //     orm.create("cats", cols, vals, function(res) {
    //       cb(res);
    //     });
    //   },
    //   update: function(objColVals, condition, cb) {
    //     orm.update("cats", objColVals, condition, function(res) {
    //       cb(res);
    //     });
    //   }
};

// Export the database functions for the controller (catsController.js).
module.exports = beer;