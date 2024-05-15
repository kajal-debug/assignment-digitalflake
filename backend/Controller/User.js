const express = require('express');
const router = express.Router();
const {body , validationResult} = require('express-validator');
const User = require('../Schema/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
 const authenticate = require('../middlewares/authenticate');





router.post('/login', [
    body('email').notEmpty().withMessage('email is Required'),
    body('password').notEmpty().withMessage('Password is Required'),
], async (request , response) => {

    let errors = validationResult(request);
    if(!errors.isEmpty()){
        return response.status(401).json({errors : errors.array()})
    }
    try {
        let {email , password} = request.body;
        console.log("email , password",email , password,request.body)
        let user = await User.findOne({email : email});
        if(user){
            return response.status(401).json({errors : [{msg : 'Invalid Credentials'}]})
        }
        // check password
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password , salt);
        // let isMatch = await bcrypt.compare(password , user.password);
        // if(!isMatch){
        //     return response.status(401).json({errors : [{msg : 'Invalid Credentials'}]})
        // }
        user = new User({ email , password});
        user = await user.save(); 
        // create a token
        let payload = {
            user : {
                id : user.id,
                name : user.name
            }
        };
        jwt.sign(payload , "secretDude" , {expiresIn: 360000000} , (err , token) => {
            if(err) throw err;
            response.status(200).json({
                msg : 'Login is Success',
                token : token
            });
        })
    }
    catch (error) {
        console.error(error);
        response.status(500).json({errors : [{msg : error.message}]});
    }
});


router.post("/logoout",async(request,response)=>{
    
    response.status(200).json({
        msg : 'Logout  Successfully'
    });
})



module.exports = router;