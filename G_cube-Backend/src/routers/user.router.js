import { registerUser , getUser , userAnswers } from "../controllers/user.controller.js";
import {Router} from 'express';
import { getUserBeforeInput } from "../middlewares/auth.middleware.js";

const router = Router()

router.route('/register').post(registerUser)
router.route('/profile').get(getUserBeforeInput,getUser)
router.route('/answers').get(getUserBeforeInput,userAnswers)

export default router;