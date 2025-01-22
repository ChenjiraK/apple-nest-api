import { Router } from 'express';
import AuthApi from '../modules/auth/AuthApi';
const router = Router();

router.use('/auth', AuthApi);

export default router;
