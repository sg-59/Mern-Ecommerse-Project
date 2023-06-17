const router=require('express').Router();
const admin=require('../models/admin')
const CryptoJS=require('crypto-js')
const jwt=require('jsonwebtoken')
const multer=require('multer');


const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'../adminsection/public/Uploads/admin/');
    },
   filename:(req,file,cb)=>{
    cb(null,file.originalname)
   }
})

const upload=multer({storage:storage});

router.post('/signup',upload.single('images'),(req,res)=>{
    console.log('adminsignup',req.body);
    const admindata=new admin({
        username:req.body.username,
        email:req.body.email,
mobile:req.body.mobile,
address:req.body.address,
password:CryptoJS.AES.encrypt(req.body.password,process.env.CRYPTO_JS).toString(),
images:req.file.originalname,
    });
try{
    const savedAdmin=admindata.save();
    res.status(201).json(savedAdmin)
}catch(err){
res.status(500).json(err)
}
   
});

router.post('/login',async(req,res)=>{
    console.log('backend admin login page',req.body);
    try{
const adminData=await admin.findOne({email:req.body.email});
!adminData && res.status(401).json('Invalid email')
console.log('admin ?',adminData);
const hashedPassword=CryptoJS.AES.decrypt(adminData.password,process.env.CRYPTO_JS);

const orginalpassword = hashedPassword.toString(CryptoJS.enc.Utf8);

orginalpassword !== req.body.password && res.status(401).json('Invalid password')
console.log('orginal password',orginalpassword);
const accesstoken=jwt.sign({
    id:admin._id,

},process.env.JWT_SEC,{expiresIn:'1d'});

const {password,...others} = adminData._doc
console.log('at last others',others);
res.status(200).json({...others,accesstoken});
     }catch(err){
res.status(500).json(err)
    }
});


module.exports=router;