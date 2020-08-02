 const express = require('express');
 const Productdata = require('../model/Productdata');
 const productRouter = express.Router();
 
// productRouter.get('/',(req,res)=>{
//     res.send('This is the router');
// })
function verifyToken(req,res,next){
          if(!req.headers.authorization){
              return res.status(401).send('Unauthorized request')
          }
          let token = req.headers.authorization.split(' ')[1]
          if(token === 'null'){
              return res.status(401).send('Unauthorized request')
          }
          let payload =jwt.verify(token,'secretKey')
          if(!payload){
              return res.status(401).send('Unauthorized request') 
          }
          req.userId = payload.subject
          next()
      }
      productRouter.get('/products',(req,res)=>{
          Productdata.find()
          .then(function(products){
          res.send(products);
          })
        //res.send('This is productrouter')
      });
      productRouter.post('/insert',verifyToken,(req,res)=>{
          console.log(req.body);
          var product = {
                productId: req.body.product.productId,
              productName: req.body.product.productName,
              productCode: req.body.product.productCode,
              releaseDate: req.body.product.releaseDate,
              description: req.body.product.description,
                    price: req.body.product.price,
               starRating: req.body.product.starRating,
                 imageUrl: req.body.product.imageUrl
          }
          var product = ProductData(product);
          product.save((req,res)=>{
          console.log(product);
          });
          });
      
 module.exports = productRouter;