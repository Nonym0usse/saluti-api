
var express = require('express');
var router = express.Router();
var firebase = require('firebase');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Error 403 - Saluti' });
});

/* GET home page. */
router.post('/auth', function(req, res, next) {
  console.log(req.body.auth);
});

router.post('/post/article', function(req, res, next) {
  console.log(req.body.auth);
});

var firebaseConfig = {
  apiKey: "AIzaSyDbv3gVRFfogV1cjak_h-6nytw4l3E1qR0",
  authDomain: "sirop-86774.firebaseapp.com",
  databaseURL: "https://sirop-86774.firebaseio.com",
  projectId: "sirop-86774",
  storageBucket: "sirop-86774.appspot.com",
  messagingSenderId: "682388243621",
  appId: "1:682388243621:web:47ce81a064a957d4f4394c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

module.exports = router;
