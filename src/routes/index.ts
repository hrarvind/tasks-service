import { Router } from 'express';
import task from './task';

const router = Router();

router.use('/api/tasks', task);

export default router;