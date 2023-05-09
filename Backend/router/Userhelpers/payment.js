const Razorpay =require('razorpay')
var bcrypt = require("bcrypt");

var instance = new Razorpay({
    key_id: "rzp_test_pKLRENWxgUTNjV",
    key_secret: "Odl3MtVlyg1mMYJ44jIHvnyS",
  });


  module.exports = {
  generateRazorpay: (orderId, total) => {
    console.log("orderId,total",orderId,total);
    return new Promise((resolve, reject) => {
      var options = {
        amount: total,
        currency: "INR",
        receipt: "" + orderId,
      };
      instance.orders.create(options, function (err, order) {
        console.log("razorpay order", order);
        resolve(order);
      });
    });
  },

  verifyPayment:(details)=>{
    return new Promise((resolve,reject)=>{

    
      const crypto = require ('crypto')
      let hmac=crypto.createHmac('sha256','Odl3MtVlyg1mMYJ44jIHvnyS')
      hmac.update(details.payment.razorpay_order_id+'|'+details.payment.razorpay_payment_id)
     hmac= hmac.digest('hex')

     console.log('hmac********',hmac);
     console.log('details********',details.payment.razorpay_signature);

     if(hmac==details.payment.razorpay_signature){
      resolve()
     }else{
      reject()
     }      
      })
  },
  
}