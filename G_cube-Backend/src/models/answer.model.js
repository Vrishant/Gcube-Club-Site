import mongoose, {Schema} from "mongoose";

const answerSchema= new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    answer:{
        type:String,
        required:true,
        trim:true,
        index:true
    },
    question:{
        type:String,
        required:true,
        trim:true,
        index:true
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    userSRN:{
        type:String,
        required:true,
        trim:true
    },
    userDomain:{
        type:String,
        required:true,
        trim:true
    }
})

export const Answer=mongoose.model('Answer',answerSchema);