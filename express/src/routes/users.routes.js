import { Router } from 'express';
import UserController from '../controllers/user.controller.js';

const router = Router();

router.get('/', UserController.getAll);
router.get('/:id', UserController.getById);
router.post('/', UserController.create);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.delete);

// Nested route: get all posts by a user
router.get('/:id/posts', UserController.getPosts);

export default router;