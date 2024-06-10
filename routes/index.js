var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});
router.get('/blog-single', function(req, res, next) {
  res.render('blog-single', { title: 'Express' });
});
router.get('/coming-soon', function(req, res, next) {
  res.render('coming-soon', { title: 'Express' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});
router.get('/index2', function(req, res, next) {
  res.render('index2', { title: 'Express' });
});
router.get('/blog', function(req, res, next) {
  res.render('blog', { title: 'Express' });
});
router.get('/index3', function(req, res, next) {
  res.render('index3', { title: 'Express' });
});
router.get('/room-single', function(req, res, next) {
  res.render('room-single', { title: 'Express' });
});
router.get('/room-single2', function(req, res, next) {
  res.render('room-single2', { title: 'Express' });
});
router.get('/room-single3', function(req, res, next) {
  res.render('room-single3', { title: 'Express' });
});
router.get('/rooms', function(req, res, next) {
  res.render('rooms', { title: 'Express' });
});
router.get('/rooms2', function(req, res, next) {
  res.render('room2', { title: 'Express' });
});
router.get('/rooms3', function(req, res, next) {
  res.render('room3', { title: 'Express' });
});
router.get('/rooms4', function(req, res, next) {
  res.render('room4', { title: 'Express' });
});

     
module.exports = router;
