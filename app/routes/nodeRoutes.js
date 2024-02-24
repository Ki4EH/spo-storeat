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
        const userId = req.body.userID;
        console.log(userId);
        console.log(`${userId}`);
        // db.collection(`${userId}`).count().then((result, err) => {
        //     if (err){
        //         res.send({"error": "An error has occured."});
        //         console.log(err)
        //     } 
       
        //     else {
        //         console.log(result);
        //         res.send("Done");
        //     } 
        // });
        db.collection(`${userId}`).findOne({type: "products"}, {_id: 0, products: 1, type: 0}).then((item, err) => {
            console.log(userId);
            if (err) {
                console.log(err);
                res.send({"error": "server error has occured"});
            } 
            else res.send(item);
        });
    });
};
