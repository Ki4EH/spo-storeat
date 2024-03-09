const { Error } = require("mongoose");

function formatDate(date){
    return `${Math.floor(date / 10)}${date % 10}`
}


module.exports = function(app, db) {
    app.post('/user/newproduct', (req, res) => { // добавление продукта пользователя
        const entry = req.body.product;
        const userId = req.body.id;
        db.collection('users').findOne({id: userId}).then((result, err) => {
            const productId = result.products[result.products.length - 1].id + 1;
            entry.id = productId;
            db.collection('users').updateOne({id: userId}, {$push: {products: entry}}).then((result, err) => {
                if (err){
                    res.send({"error": "An error has occured."});
                    console.log(err)
                } 
                else res.send("Done."); 
            }
            )
        });
        // console.log(req.body);
    });

    app.post('/user/newrecipe', (req, res) => { // добавление рецепта пользователя
        let entry;
        let userId;
        try {
            entry = req.body.recipe;
            userId = req.body.id;
        } catch {
            res.send({"Error": "Incorrect request."});
        }
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

    app.post('/user/openproduct', (req, res) => { // добавление рецепта пользователя
        let userId = 0;
        let productId = 0;
        try {
            userId = parseInt(req.query.id);
            productId = parseInt(req.query.productId);
        } catch {
            res.send({"Error": "Incorrect request."});
        }
        let date = new Date();
        date = `${formatDate(date.getFullYear())}-${formatDate(date.getUTCMonth() + 1)}-${formatDate(date.getDate())}`;
        db.collection('users').updateOne({id: userId, "products.id": productId}, {$set: {"products.$.openingDate" : date}}).then((result, err) => {
            if (err){
                res.send({"error": "An error has occured."});
                console.log(err)
            }
            else if (!result) {
                res.send({"error": {"Error": "Could not find product with ID " + productId + " from user with ID " + userId + "."}});
                console.log(err)
            }
            else res.send("Done."); 
        }
        )
    });

    app.get("/user/products", (req, res) => { // получение продукта пользователя
        let userId = 0;
        try {
            userId = parseInt(req.query.id);
        } catch {
            res.send({"Error": "Incorrect request."})
        }
        db.collection("users").findOne({id: userId}, {}).then((item, err) => {
            // console.log(userId);
            if (err) {
                console.log(err);
                res.send({"Error": "Server error has occured."});
            } 
            else if (!item) {
                res.send({"Error": "Could not find user with ID " + userId + "."})
            }
            else res.send(item.products);
        });
    });

    app.get("/user/recipes", (req, res) => { // получение рецепта пользователя
        const userId = parseInt(req.query.id);
        db.collection("users").findOne({id: userId}, {}).then((item, err) => {
            // console.log(userId);
            if (err) {
                console.log(err);
                res.send({"error": "server error has occured"});
            } 
            else res.send(item.recipes);
        });
    });

    app.get("/user/expiredproducts", (req, res) => { // получение просроченных продуктов пользователя
        const userId = parseInt(req.query.id);
        db.collection("users").findOne({id: userId}, {}).then((item, err) => {
            // console.log(userId);
            if (err) {
                console.log(err);
                res.send({"error": "server error has occured"});
            }
            
            let expiredproducts = [];
            let index = 1;
            item.products.forEach(element => {
                if (element.openingDate){
                    let newDate = new Date(element.openingDate);
                    // console.log(element.openingDate, element.name, newDate);
                    if (newDate.getTime() + (element.shelfLife * 24 * 3600 * 1000) < new Date().getTime()) { 
                        expiredproducts.push({
                            id: index++,
                            productId: element.id,
                            expiresBy: "Expired"
                        });
                } else if (newDate.getTime() + (element.shelfLife * 24 * 3600 * 1000) - new Date().getTime() < 48 * 3600 * 1000) {expiredproducts.push({
                        id: index++,
                        productId: element.id,
                        expiresBy: `${formatDate(new Date(newDate.getTime() + element.shelfLife * 24 * 3600 * 1000).getDate())}.${formatDate(new Date(newDate.getTime() + element.shelfLife * 24 * 3600 * 1000).getMonth())}`
                    })

                    }
                } else {
                    let newDate = new Date(element.expiresBy);
                    // console.log(newDate);
                    if (newDate.getDate() < new Date().getDate()) expiredproducts.push({
                        id: index++,
                        productId: element.id,
                        expiresBy: "Expired"
                    });
                }
            });
            res.send(expiredproducts); 
        });
    });
};
