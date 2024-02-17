module.exports = function(app, db) {
    app.post('/products', (req, res) => {
        const entry = {userID: req.body.userID, name: req.body.name, date: req.body.date};
        console.log(req.body);
        db.collection('products').insertOne(entry).then((result, err) => {
            if (err){
                res.send({"error": "An error has occured."});
                console.log(err)
            } 
            else res.send("Done.");
        })
      });
};