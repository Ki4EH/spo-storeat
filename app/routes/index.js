const noteRoutes = require("./nodeRoutes");

module.exports = function(app, db) {
  noteRoutes(app, db);
};