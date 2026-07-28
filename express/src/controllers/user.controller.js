import UserService from '../services/user.service.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const UserController = {
  getAll: asyncHandler(async (req, res) => {
    const users = await UserService.getAll();
    res.json({ success: true, data: users, count: users.length });
  }),

  getById: asyncHandler(async (req, res) => {
    const user = await UserService.getById(req.params.id);
    res.json({ success: true, data: user });
  }),

  create: asyncHandler(async (req, res) => {
    const user = await UserService.create(req.body);
    res.status(201).json({ success: true, data: user });
  }),

  update: asyncHandler(async (req, res) => {
    const user = await UserService.update(req.params.id, req.body);
    res.json({ success: true, data: user });
  }),

  delete: asyncHandler(async (req, res) => {
    await UserService.delete(req.params.id);
    res.json({ success: true, message: 'User deleted successfully' });
  }),

  getPosts: asyncHandler(async (req, res) => {
    const posts = await UserService.getPosts(req.params.id);
    res.json({ success: true, data: posts, count: posts.length });
  })
};

export default UserController;