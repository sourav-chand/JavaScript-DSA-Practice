import User from '../models/user.model.js';
import Post from '../models/post.model.js';
import { NotFoundError, ValidationError, ConflictError } from '../utils/errors.js';

export const UserService = {
  async getAll() {
    return User.find().sort({ created_at: -1 });
  },

  async getById(id) {
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      throw new ValidationError('Invalid user ID format');
    }
    const user = await User.findById(id);
    if (!user) throw new NotFoundError('User');
    return user;
  },

  async create(data) {
    const { name, email, age } = data;

    if (!name || !name.trim()) {
      throw new ValidationError('Name is required');
    }
    if (!email || !email.trim()) {
      throw new ValidationError('Email is required');
    }

    // Check duplicate email
    const existing = await User.findOne({ email: email.trim().toLowerCase() });
    if (existing) {
      throw new ConflictError('A user with this email already exists');
    }

    try {
      return await User.create({ name: name.trim(), email: email.trim(), age });
    } catch (err) {
      if (err.code === 11000) {
        throw new ConflictError('A user with this email already exists');
      }
      if (err.name === 'ValidationError') {
        const msg = Object.values(err.errors).map((e) => e.message).join('; ');
        throw new ValidationError(msg);
      }
      throw err;
    }
  },

  async update(id, data) {
    await this.getById(id); // throws if not found

    const updateData = {};
    if (data.name !== undefined) updateData.name = data.name.trim();
    if (data.email !== undefined) updateData.email = data.email.trim();
    if (data.age !== undefined) updateData.age = data.age;

    if (data.email) {
      const dup = await User.findOne({ email: data.email.trim().toLowerCase(), _id: { $ne: id } });
      if (dup) throw new ConflictError('A user with this email already exists');
    }

    try {
      const updated = await User.findByIdAndUpdate(id, updateData, {
        new: true,
        runValidators: true
      });
      if (!updated) throw new NotFoundError('User');
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
    await User.findByIdAndDelete(id);
    return true;
  },

  async getPosts(userId) {
    await this.getById(userId);
    return Post.find({ userId }).sort({ created_at: -1 });
  }
};

export default UserService;