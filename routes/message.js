var express = require('express');
var router = express.Router();
var MessageServer = require('../message_server')

router.use('/taobaoke', function(req, res, next) {
    var data = req.body;
    MessageServer.getInstance(null).req_title_token(data);
    res.send('')
})

router.use('/order', function(req, res, next) {
    console.log(req.body);
    var openid = req.body.openid;
    var code = req.body.code;
    var str = req.body.str;

    MessageServer.getInstance(null).update_order(openid,code,str);
    res.send('')
})

module.exports = router;
