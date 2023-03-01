const express=require('express')
const app=express();
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const userrouter=require('./router/user')
const authrouter=require('./router/auth')
const productrouter=require('./router/product')
const cartrouter=require('./router/cart')
const orderrouter=require('./router/order')

dotenv.config()

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("DB connection is successfull !")}).catch((err)=>{
console.log(err);
    });
app.use(express.json())
    app.use('/api/user',userrouter);
    app.use('/api/auth',authrouter);
    app.use('/api/product',productrouter);
    app.use('/api/cart',cartrouter);
    app.use('/api/order',orderrouter);

app.listen(process.env.PORT || 5000,()=>{
    console.log("port 5000 is connected");
})