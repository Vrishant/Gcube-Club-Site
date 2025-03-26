import {asyncHandler} from '../utils/asyncHandler.js';
import {ApiResponse} from '../utils/ApiResponse.js';
import {ApiError} from '../utils/ApiError.js';
import { User } from '../models/user.model.js';
import { Answer } from '../models/answer.model.js';

const registerAnswer=asyncHandler(async(req,res)=>{
    console.log('Request Body:', req.body);
    // Trim field names to handle potential spaces
    const trimmedBody = Object.fromEntries(
        Object.entries(req.body).map(([key, value]) => [key.trim(), value])
    );
    
    const {answer1, question1,answer2,question2,answer3,question3,answer4,question4} = trimmedBody;
    if(!answer1 || !question1) {
        //console.log('Missing fields:', {answer, question});
        throw new ApiError(400, "Answer or question was not provided");
    }
    const userId=req.user?._id;
    const name=req.user?.username;
    const userSRN=req.user?.srn;
    const userDomain=req.user?.domain;
    if(!userId){
        throw new ApiError(400,"User is required"); 
    }
/*    const userDoc= await User.findById(user);
    if(!userDoc || !userDoc.srn){
        throw new ApiError(400,"User or SRN was not found");
    }
    const srn= userDoc.srn;
    const exsistingEntry= await User.countDocuments({srn:srn});
    if(exsistingEntry>2){
       throw new ApiError(408,"Limit of 2 entries exceeded"); 
    }   */
    const answerDoc=await Answer.create({userId,question1,answer1,answer2,question2,answer3,question3,answer4,question4,name,userSRN,userDomain});
    const fetchedAnswer= await Answer.findById(answerDoc._id);
    if(!fetchedAnswer){
        throw new ApiError(504,"Error in registering answer");
    }
    await User.findByIdAndUpdate(
        userId,
       // {$push:{answer:answerDoc._id}},
       {$set:{answer:answerDoc._id}}, 
       {new:true}
    )
    return res.status(201)
    .json(new ApiResponse(201,fetchedAnswer,"Answer registered successfully"));
})

export {
    registerAnswer
}