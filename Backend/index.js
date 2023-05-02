const express=require('express')
const app=express();
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const userrouter=require('./router/user')
const authrouter=require('./router/auth')
const mensproductrouter=require('./router/mensproduct')
const womensproductrouter=require('./router/womensproduct')
const kidsproductrouter=require('./router/kidsproduct')
const cartrouter=require('./router/cart')
const orderrouter=require('./router/order')
const cors=require('cors');
const cookieParser = require('cookie-parser');


dotenv.config()
app.use(cors())

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("DB connection is successfull !")}).catch((err)=>{
console.log(err);
    });


app.use(express.json());
app.use(cookieParser());
    app.use('/api/user',userrouter);
    app.use('/api/auth',authrouter);
    app.use('/api/mensproduct',mensproductrouter);
    app.use('/api/womensproduct',womensproductrouter);
    app.use('/api/kidsproduct',kidsproductrouter);
    app.use('/api/cart',cartrouter);
    app.use('/api/order',orderrouter);

app.listen(process.env.PORT || 5000,()=>{
    console.log("port 5000 is connected");
})  