var friendData = require("../data/friends");

module.exports = function(app){
    app.post("/api/friends", function (req,res){
        friendData.push(req.body);
        res.json(true);
    });
}