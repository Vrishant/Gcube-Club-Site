import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";

export const getUserBeforeInput = asyncHandler(async (req, res, next) => {
    const { userId } = req.params;
    
    if (!userId) {
        throw new ApiError(400, "User ID is required");
    }

    const user = await User.findById(userId);

    if (!user) {
        throw new ApiError(404, "User not found");
    }

    req.user = user;
    next();
});