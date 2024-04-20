import { Router } from 'express';
import { AuthController } from './controller';

const router = Router();

router.post('/signup', AuthController.register);
router.post('/login', AuthController.login);

export default router;