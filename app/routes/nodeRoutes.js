module.exports = function(app, db) {
    app.post('/product', (req, res) => {
        const entry = {userID: req.body.userID, name: req.body.name, date: req.body.date};
        // console.log(req.body);
        db.collection('products').insertOne(entry).then((result, err) => {
            if (err){
                res.send({"error": "An error has occured."});
                console.log(err)
            } 
            else res.send("Done.");
        })
    });

    app.get("/user/products", (req, res) => {
        const userId = parseInt(req.body.userID);
        db.collection("users").findOne({id: userId}, {}).then((item, err) => {
            // console.log(userId);
            if (err) {
                console.log(err);
                res.send({"error": "server error has occured"});
            } 
            else res.send(item.products);
        });
    });

    app.get("/user/recipes", (req, res) => {
        const userId = parseInt(req.body.userID);
        db.collection("users").findOne({id: userId}, {}).then((item, err) => {
            // console.log(userId);
            if (err) {
                console.log(err);
                res.send({"error": "server error has occured"});
            } 
            else res.send(item.recipes);
        });
    });
};
