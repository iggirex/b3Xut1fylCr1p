var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next){
    res.render("index", { title: "Cool title here", condition: false });
})

router.get("/marketCapBubble", function(req, res, next){
    res.send("response with a resource");
})

router.get("/coinmarketpie", function(req, res, next){
    res.render("coinMarketPie");
})

router.get("/bitcoinpricehistory", function(req, res, next){
    res.render("bitcoinPriceHistory");
})

router.get("/coinscatterplot", function(req, res, next){
    res.render("coinScatterPlot");
})

router.get("/marketbarchart", function(req, res, next){
    res.render("marketBarChart");
})

module.exports = router;