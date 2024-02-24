const nodeRoutes = require("./nodeRoutes");

module.exports = function(app, db) {
  nodeRoutes(app, db);
};