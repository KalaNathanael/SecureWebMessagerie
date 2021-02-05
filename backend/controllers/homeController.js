const User=require('../models/user');
const Contact=require('../models/contact');
const Message=require('../models/message');
const bcrypt=require('bcryptjs');


exports.home=(req,res,next)=>{
     console.log(req.body);
    res.json({ message: 'Votre requête a bien été effectue !' });
     next();


};
exports.test=(req,res,next)=>{
          
      res.json({message:req.body.name});
      next();
};

exports.createUser=(req,res,next)=>{

    bcrypt.hash(req.body.password, 10)
    .then(hash => {
        const user=new User({
      username:req.body.username,
      name:req.body.name,
      phone:req.body.phone,
      password:hash,
      email:req.body.email,
      isphoneverified:false,
      isemailverified:false
    });


    user.save().then(
        ()=>{
            res.status(201).json({
                message:"user added successfull",
                data: user
            });
        }
   
      ).catch(
          (error)=>{
              res.status(400).json({
                  error:error
              });
          }
      )

   }).catch(error => res.status(500).json({ error }));
   


};