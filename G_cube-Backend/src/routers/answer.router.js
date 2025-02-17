import {registerAnswer} from '../controllers/answer.controller.js';
import {Router} from 'express';
import {getUserBeforeInput} from '../middlewares/auth.middleware.js';
const router = Router()

router.route('/register').post(getUserBeforeInput,registerAnswer)

export default router;