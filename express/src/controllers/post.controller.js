import PostService from '../services/post.service.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const PostController = {
  getAll: asyncHandler(async (req, res) => {
    const posts = await PostService.getAll();
    res.json({ success: true, data: posts, count: posts.length });
  }),

  getById: asyncHandler(async (req, res) => {
    const post = await PostService.getById(req.params.id);
    res.json({ success: true, data: post });
  }),

  create: asyncHandler(async (req, res) => {
    const post = await PostService.create(req.body);
    res.status(201).json({ success: true, data: post });
  }),

  update: asyncHandler(async (req, res) => {
    const post = await PostService.update(req.params.id, req.body);
    res.json({ success: true, data: post });
  }),

  delete: asyncHandler(async (req, res) => {
    await PostService.delete(req.params.id);
    res.json({ success: true, message: 'Post deleted successfully' });
  })
};

export default PostController;