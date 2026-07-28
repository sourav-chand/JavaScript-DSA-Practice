import Post from '../models/post.model.js';
import User from '../models/user.model.js';
import { NotFoundError, ValidationError } from '../utils/errors.js';

export const PostService = {
  async getAll() {
    return Post.find()
      .populate('userId', 'name email')
      .sort({ created_at: -1 });
  },

  async getById(id) {
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      throw new ValidationError('Invalid post ID format');
    }
    const post = await Post.findById(id).populate('userId', 'name email');
    if (!post) throw new NotFoundError('Post');
    return post;
  },

  async create(data) {
    const { title, content, userId } = data;

    if (!title || !title.trim()) {
      throw new ValidationError('Title is required');
    }
    if (!content || !content.trim()) {
      throw new ValidationError('Content is required');
    }
    if (!userId) {
      throw new ValidationError('User ID is required');
    }

    const user = await User.findById(userId);
    if (!user) throw new NotFoundError('User');

    try {
      const post = await Post.create({
        title: title.trim(),
        content: content.trim(),
        userId
      });
      return await Post.findById(post._id).populate('userId', 'name email');
    } catch (err) {
      if (err.name === 'ValidationError') {
        const msg = Object.values(err.errors).map((e) => e.message).join('; ');
        throw new ValidationError(msg);
      }
      throw err;
    }
  },

  async update(id, data) {
    await this.getById(id);

    const updateData = {};
    if (data.title !== undefined) updateData.title = data.title.trim();
    if (data.content !== undefined) updateData.content = data.content.trim();

    try {
      const updated = await Post.findByIdAndUpdate(id, updateData, {
        new: true,
        runValidators: true
      }).populate('userId', 'name email');
      if (!updated) throw new NotFoundError('Post');
      return updated;
    } catch (err) {
      if (err.name === 'ValidationError') {
        const msg = Object.values(err.errors).map((e) => e.message).join('; ');
        throw new ValidationError(msg);
      }
      throw err;
    }
  },

  async delete(id) {
    await this.getById(id);
    await Post.findByIdAndDelete(id);
    return true;
  }
};

export default PostService;