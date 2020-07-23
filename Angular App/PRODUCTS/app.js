const express = require('express');
const ProductData = require('./src/model/Productdata');
//const Registrationdata = require('./src/model/Registrationdata');
const cors = require('cors');
const updateRouter = require('./src/routes/updateRoutes');
//const registrationAdminRouter = require('./src/routes/registrationAdminRoutes');

var bodyparser = require('body-parser');
var app = new express();

app.use(cors());
app.use(bodyparser.json())
app.use('/update',updateRouter);
//app.use('/admin',registrationAdminRouter);

app.get('/products',(req,res)=>{
      ProductData.find()
      .then(function(products){
      res.send(products);
      })
});
      app.post('/insert',(req,res)=>{
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
app.listen(3000,()=>console.log('listening to port 3000'));