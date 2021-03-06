var express = require('express');
var config = require('./config/index');

var port = process.env.PORT || config.build.port;

var app = express();

var router = express.Router();
router.get('/', function(req,res,next){
	req.url = '/index.html';
	next();
});
app.use(router);
var mobileList = require('./data.json');
var apiRoutes = express.Router();
apiRoutes.get('/mobile',function(req,res){
  res.json({
    resultMessage: 'success',
    data: mobileList
  });
});
app.use('/api',apiRoutes);
app.use(express.static('./dist'));
module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }

  // when env is testing, don't need open it

})
