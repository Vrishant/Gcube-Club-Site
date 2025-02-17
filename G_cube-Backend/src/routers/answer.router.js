import {registerAnswer} from '../controllers/answer.controller.js';
import {Router} from 'express';
const router = Router()

router.route('/register').post(registerAnswer)

export default router;