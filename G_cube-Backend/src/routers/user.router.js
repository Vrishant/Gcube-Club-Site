import { registerUser , getUser , userAnswers } from "../controllers/user.controller.js";
import {Router} from 'express';

const router = Router()

router.route('/register').post(registerUser)
router.route('/profile').get(getUser)
router.route('/answers').get(userAnswers)

export default router;