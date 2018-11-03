var path = require("path");
var fs = require("fs");

module.exports = function(app){
    //Home
    app.get("/home", function(req, response){
        response.sendfile(path.join(__dirname, "../html/index.html"));
    });
    //Survey
    app.get("/survey", function(req, response){
        response.sendfile(path.join(__dirname, "../html/survey.html"));
    });

};

