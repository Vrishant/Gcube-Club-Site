import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";

export const getUserBeforeInput = asyncHandler(async (req, _, next) => {
    const userId = req.headers['user-id'] || req.query.userId ;
    
    if (!userId) {
        throw new ApiError(400, "User ID is required. Please provide it in headers, query params, or request body");
    }

    const user = await User.findById(userId);

    if (!user) {
        throw new ApiError(404, "User could not fetched.");
    }

    req.user = user;
    next();
});