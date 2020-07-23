const express = require('express');
const Productdata = require('../model/Productdata');
const updateRouter = express.Router();
//console.log('Hello');
function router(){

  //console.log('req.body.product'); 
updateRouter.post('/update',(req,res)=>{
  console.log('id');
  var id = req.body._id;
  //console.log(req.body);
  var product = {
        productId: req.body.product.productId,
      productName: req.body.product.productName,
      productCode: req.body.product.productCode,
      releaseData: req.body.product.releaseData,
      description: req.body.product.description,
            price: req.body.product.price,
       starRating: req.body.product.starRating,
         imageUrl: req.body.product.imageUrl 
  }
  //console.log(9);
  //var product = Productdata(product);
  Productdata.findByIdAndUpdate(id,product,(result,err)=>{
             if(result){
                res.send(products);
            }
             else{
                console.log(err);
            }
  })  
});
    
    return updateRouter;
}
module.exports = router;