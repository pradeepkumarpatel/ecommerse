const express = require('express');
const Employee = require('../models/employee.js');
const Seller = require('../models/seller.js');
const Product = require('../models/product.js');
const router = express.Router();
const objectID = require('mongoose').Types.ObjectId;

// POST API request
router.post('/home', (req, res) => {
  let emp = new Employee({
    uname: req.body.uname,
    email: req.body.email
  })
  emp.save().then((err, result) => {
    if (err) {
      res.send(err)
    }
    res.send(result)
  })
})

// POST API request
router.post('/sell-auth', (req, res) => {
  let sell = new Seller({
    name: req.body.name,
    password: req.body.pass,
    email: req.body.email
  })
  sell.save().then((err, result) => {
    if (err) {
      res.send(err)
    }
    res.send(result)
  })
})

// POST API request
router.post('/seller-add-product', (req, res) => {
  let prod = new Product({
    pname: req.body.pname,
    pprice: req.body.pprice,
    pcategory: req.body.pcategory,
    pdescription: req.body.pdescription
  })
  prod.save().then((err, result) => {
    if (err) {
      res.send(err)
    }
    res.send(result)
  })
})
//GET API
router.get('/home', (req, res) => {
  Employee.find()
    .then((err, result) => {
      if (err) {
        res.send(err)
      }
      res.send(result)
    })
})
router.get('/seller-home', (req, res) => {
  Product.find().then((err, result) => {
    if (err) {
      res.send(err)
    }
    res.send(result)
  })
})

// GET SINGLE product based on id
router.get('/product-detail/:id', (req, res) => {
  if (objectID.isValid(req.params.id)) {
    Product.findById(req.params.id).then((err, result) => {
      if (err) {
        res.send(err)
      }
      res.send(result)
    })
  } else {
    return res.send({ status: 'no records found' })
  }
})

// DELETE SINGLE product based on id
router.delete('/seller-home/:id', (req, res) => {
  if (objectID.isValid(req.params.id)) {
    Product.findByIdAndRemove(req.params.id).then((err, result) => {
      if (err) {
        res.send(err)
      }
      res.send(result)
    })
  } else {
    return res.send({ status: 'no records found' })
  }
})

// UPDATE SINGLE product based on id
router.put('/seller-home/:id', (req, res) => {
  if (objectID.isValid(req.params.id)) {
    let emp = {
      uname: req.body.uname,
      email: req.body.email
    }
    Product.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }).then((err, result) => {
      if (err) {
        res.send(err)
      }
      res.send(result)
    })
  } else {
    return res.send({ status: 'no records found' })
  }
})

module.exports = router;