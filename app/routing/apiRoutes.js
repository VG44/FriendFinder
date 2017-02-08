var friends = require("../data/friends.js");

module.exports = function(app){

    app.get("/api/friends", function(req, res){
        res.json(friends);
    });

app.post("/api/friends", function(req, res){
    var lowInt = 50;
    var chosenMatch;
    friends.forEach(function(user){
        var diff = 0;
        for(i=0;i<user.scores.length;i++){
            diff += Math.abs(user.scores[i] - req.body.scores[i]);
        } if(diff<lowInt){
            lowInt = diff;
            chosenMatch = user;
        }
    });

    res.json(chosenMatch);
    friends.push(req.body);

});

};