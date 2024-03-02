module.exports = function(app, db) {
    app.post('/user/newproduct', (req, res) => {
        const entry = req.body.product;
        const userId = req.body.id;
        // console.log(req.body);
        db.collection('users').updateOne({id: userId}, {$push: {products: entry}}).then((result, err) => {
            if (err){
                res.send({"error": "An error has occured."});
                console.log(err)
            } 
            else res.send("Done."); 
        }
        )
    });

    app.post('/user/newrecipe', (req, res) => {
        const entry = req.body.recipe;
        const userId = req.body.id;
        // console.log(req.body);
        db.collection('users').updateOne({id: userId}, {$push: {recipes: entry}}).then((result, err) => {
            if (err){
                res.send({"error": "An error has occured."});
                console.log(err)
            } 
            else res.send("Done."); 
        }
        )
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

    app.get("/user/expiredproducts", (req, res) => {
        const userId = parseInt(req.body.userID);
        db.collection("users").findOne({id: userId}, {}).then((item, err) => {
            // console.log(userId);
            if (err) {
                console.log(err);
                res.send({"error": "server error has occured"});
            } 
            item.products.forEach(element => {
                let datestr = element.expiresBy;
                
            });
            
        });
    });
};
