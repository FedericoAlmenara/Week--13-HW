var path = require("path");
var fs = require("fs");

module.exports = function(app){
    //Home
    app.get("/", function(req, response){
        response.sendfile(path.join(__dirname, "../public/index.html"));
    });
    //Survey
    app.get("/survey", function(req, response){
        response.sendfile(path.join(__dirname, "../public/survey.html"));
    });

};

