import { Router } from 'express';
import { AuthController } from './controller';
import { validateUserCreds } from './validators';

const router = Router();

router.post('/signup',validateUserCreds, AuthController.register);
router.post('/login',validateUserCreds, AuthController.login);

export default router;