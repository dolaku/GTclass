var path = require("path");

module.exports = function (app) {
    app.get("/table", function (req, res) {
        res.sendFile(path.join(__dirname, "../table.html"));
    });
    app.get("/form", function (req, res) {
        res.sendFile(path.join(__dirname, "../form.html"));
    });
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../home.html"));
    });
};