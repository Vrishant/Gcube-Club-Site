import {asyncHandler} from '../utils/asyncHandler.js';
import {ApiResponse} from '../utils/ApiResponse.js';
import {ApiError} from '../utils/ApiError.js';
import {User} from '../models/user.model.js';
import mongoose from 'mongoose';

const registerUser = asyncHandler(async(req,res)=>{ 
    const {username,srn,branch,semester,contactNo,email,domain}=req.body;
    if([username,srn,branch,semester,contactNo,email,domain].some((field)=>field?.trim()==="")){
        throw new ApiError(400,"Please fill all the fields");
    }
    const someUser= await User.create({
        username,
        srn,
        branch,
        semester,
        contactNo,
        email,
        domain
    })
    const createdUser= await User.findById(someUser._id);
    if(!createdUser){
        throw new ApiError(504,"Some error occured in user registration");
    }
    return res.status(201)
    .json(new ApiResponse(201,createdUser,"Successful user registration"));
})

const getUser= asyncHandler(async(req,res)=>{
    const userId=req.user?._id;
    if(!userId){
        throw new ApiError(401,"User not authenticated");
    }
    const user= await User.findById(userId).select("-answer");      //add or remove fields u want to give to user
    if(!user){
        throw new ApiError(404,"User not found");
    }
    return res.status(202)
    .json(new ApiResponse(202,user,"User has been fetched."));
})

const userAnswers= asyncHandler(async(req,res)=>{
    const userId=req.user?._id;
    if(!userId){
        throw new ApiError(401,"User not provided");
    }
    const answer= await User.aggregate([
        {
            $match:{
                _id:new mongoose.Types.ObjectId(userId)
            }
        },{
            $lookup:{
                from:"answers",
                localField:"_id",
                foreignField:"user",
                as:"answers"
            }
        },{
            $project:{
                answers:1,
                username:1,
                srn:1
            }
        }
    ])
    if(!answer?.length){
        throw new ApiError(400,"User answer not found");
    }
    return res.status(201)
    .json(new ApiResponse(201,answer,"User answer fetched successfully"))
})

export {
    registerUser,
    getUser,
    userAnswers
}