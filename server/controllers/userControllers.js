const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "test";

const signup = async(req, res) => {

    
    const{username, email, password} = req.body;
    try{
        const existingUser = await userModel.findOne({email:email});
        if(existingUser){
            return res.status(400).json({message:"User already exists"});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await userModel.create({
            email:email, 
            username:username, 
            password:hashedPassword
        });

        const Token = jwt.sign({email : result.email, id : result._id}, SECRET_KEY);
        res.status(201).json({user:result, token:Token});

    } catch(error){
        console.log(error);
        res.status(500).json({message:"Something Went Wrong"})
    }

}

const signin = async(req, res) => {
    
    const {email,password} = reg.body;

    try{

        const existingUser = await userModel.findOne({email:email});
        if(!existingUser){
            return res.status(404).json({message:"User doesn't exist"});
        }
    }
}

module.exports = {signup, signin}