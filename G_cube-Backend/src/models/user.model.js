import mongoose,{Schema} from "mongoose";

const userSchema = new Schema({
    username:{
        type:String,
        trim:true,
        index:true,
        required:true
    },
    email:{
        type:String,
        trim:true,
        required:true,
        index:true,
    },
    srn:{
        type:String,
        index:true,
        required:true,
        trim:true,
        lowercase:true
    },
    answer:{
        type:Schema.Types.ObjectId,
        ref:'Answer'
    },
    branch:{
        type:String,
        required:true,
        trim:true,
        index:true
    },
    semester:{
        //type:Number,        
        type:String,
        required:true,
    },
    contactNo:{
        //type:Number,
        type:String,
        required:true,
    },
    domain:{
        type:String,
        required:true,
        trim:true
    }
},{
    timestamps:true
})

export const User = mongoose.model("User",userSchema);