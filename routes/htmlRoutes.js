module.exports = function(app){

    app.get("/", function (req, res){
        res.render("index");
    });
    
    app.get("/create", function (req, res){
        res.render("create");
    });

    app.get("/portfolio", function (req, res){
        res.render("portfolio");
    });
}