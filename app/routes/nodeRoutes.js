function formatDate(date){
    return `${Math.floor(date / 10)}${date % 10}`
}


module.exports = function(app, db) {
    app.post('/user/newproduct', (req, res) => {
        const entry = req.body.product;
        const userId = req.body.id;
        // console.log(req.body);
        db.collection('users').updateOne({id: userId}, {$push: {products: entry}}).thexn((result, err) => {
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

    app.post("/user/expiredproducts", (req, res) => {
        const userId = parseInt(req.body.userID);
        db.collection("users").findOne({id: userId}, {}).then((item, err) => {
            // console.log(userId);
            if (err) {
                console.log(err);
                res.send({"error": "server error has occured"});
            }
            let expiredproducts = [];
            item.products.forEach(element => {
                if (element.openingDate){
                    let openDate = element.openingDate;
                    let newDate = new Date(openDate.slice(-4) + "-" + openDate.slice(-7, -5) + "-" + openDate.slice(0, 2));
                    if (newDate.getTime() + (element.shelfLife * 24 * 3600 * 1000) < new Date().getTime()) { 
                        expiredproducts.push({
                            name: element.name,
                            img: element.img,
                            expiresBy: "Expired"
                        });
                } else if (newDate.getTime() + (element.shelfLife * 24 * 3600 * 1000) - new Date().getTime() < 48 * 3600 * 1000) {expiredproducts.push({
                        name: element.name,
                        img: element.img,
                        expiresBy: `${formatDate(new Date(newDate.getTime() + element.shelfLife * 24 * 3600 * 1000).getDate())}.${formatDate(new Date(newDate.getTime() + element.shelfLife * 24 * 3600 * 1000).getMonth())}`
                    })

                    }
                } else {
                    let curDate = element.expiresBy;
                    let newDate = new Date(curDate.slice(-4) + "-" + curDate.slice(-7, -5) + "-" + curDate.slice(0, 2));
                    // console.log(newDate);
                    if (newDate.getDate() < new Date().getDate()) expiredproducts.push({
                        name: element.name,
                        img: element.img,
                        expiresBy: "Expired"
                    });
                }
            });
            res.send(expiredproducts); 
        });
    });
};
