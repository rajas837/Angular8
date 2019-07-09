var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var User = require('../user/User');

  router.post('/register', function(req, res) {
  
    var hashedPassword = bcrypt.hashSync(req.body.password, 8);
    
    User.create({
      name : req.body.name,
      email : req.body.email,
      password : hashedPassword,
      role:req.body.role?req.body.role:'user',
      contacts:req.body.contacts
    },
    function (err, user) {
      if (err) return res.status(500).send("There was a problem registering the user.")
      // create a token
      var token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 86400 // expires in 24 hours
      });
      res.setHeader('Access-Control-Allow-Origin','*')
      res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With,Content-Type,Accept')
      res.status(200).send({ auth: true, token: token });
    }); 
  });
  router.post('/registerContact', function(req, res) {
    User.create({
      type : req.body.type,
      number : req.body.number,
      address : req.body.address
    },
    function (err, user) {
      if (err) return res.status(500).send("There was a problem registering the contact.")
      // create a token
      var token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 86400 // expires in 24 hours
      });
      res.setHeader('Access-Control-Allow-Origin','*')
      res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With,Content-Type,Accept')
      res.status(200).send({ auth: true, token: token });
    }); 
  });
  router.get('/user/:id', function(req, res){
    var uid = req.params.id.toString();
    User.findOne({ '_id': uid },function(err, user){
      if(err)throw err;
      res.send(user);
      //console.log(user);
    })
  })
  router.get('/contact/:id', function(req, res){
    var uid = req.params.id.toString();
    User.findOne({ '_id': uid },function(err, user){
      if(err)throw err;
      res.send(user);
      //console.log(user);
    })
  })
  router.get('/userinfo', function(req, res) {
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, config.secret, function(err, decoded) {
      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
      
      // res.status(200).send(decoded);
      User.findById(decoded.id, { password: 0 }, function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");
        res.setHeader('Access-Control-Allow-Origin','*')
        res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With,Content-Type,Accept')
        res.status(200).send(user);
      });
    });
  });

  router.post('/login', function(req, res) {
    User.findOne({ email: req.body.email }, function (err, user) {
      if (err) return res.status(500).send('Error on the server.');
      if (!user) return res.status(404).send('No user found.');
      var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
      if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
      var token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 86400 // expires in 24 hours
      });
      res.setHeader('Access-Control-Allow-Origin','*')
      res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With,Content-Type,Accept')
      res.status(200).send({ auth: true, token: token });
    });
  });

  router.get('/users',(req,res) => {
    User.find({},(err,data)=>{
      if(err)throw err;
      res.send(data)
    })
  })

  // router.put('/user/:id', function(req, res, next) {
  //   var uid = req.params.id.toString();
  //   User.findByIdAndUpdate(uid, req.body, function (err, post) {
  //     if (err) return next(err);
  //     res.send(post);
  //   });
  // });
  router.put('/user/:id', function(req, res, next) {
    var uid = req.params.id.toString();
    var newValue = { $set: {name: req.body.name, email: req.body.email}}
    User.updateOne({"_id": uid, newValue}, function (err, post) {
      if (err) return next(err);
      res.send(post);
    });
  });
  router.put('/contact/:id', function(req, res, next) {
    var uid = req.params.id.toString();
    var newContact = { $set: {name: req.body.name, email: req.body.email}}
    User.updateOne({"_id": uid, newContact}, function (err, post) {
      if (err) return next(err);
      res.send(post);
    });
  });

  router.delete('/deleteuser/:id', (req,res) => {
    var uid = req.params.id.toString();
    User.deleteOne({"_id": uid}, function(err, results){
      if(err)throw err;
      res.send({message : 'User deleted successfully'});
      console.log(results.result);
    })
  })
  router.delete('/deletecontact/:id', (req,res) => {
    var uid = req.params.id.toString();
    var oldContact = { $pull: {name: req.body.name, email: req.body.email}}
    User.updateOne({"_id": uid, oldContact}, function (err, post) {
      if (err) return next(err);
      res.send(post);
    });
  })


  module.exports = router;