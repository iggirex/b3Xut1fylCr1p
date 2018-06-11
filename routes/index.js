var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next){
    res.render("index", { title: "Cool title here", condition: false });
})

router.get("/marketCapBubble", function(req, res, next){
    res.render("marketCapBubble");
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

router.get("/top10marketcaps", function(req, res, next){
    res.render("top10MarketCaps");
})

router.get("/priceVScaps", function(req, res, next){
    res.render("priceVScaps");
})

module.exports = router;