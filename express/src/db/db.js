import mongoose from 'mongoose';
import { config } from '../config/index.js';

// MONGO_URL contains the full connection string (including db name, replica set, authSource, etc.)
const MONGO_URI = config.mongo.url;

let isConnected = false;

export async function connectDatabase() {
  if (isConnected) return;

  try {
    await mongoose.connect(MONGO_URI, {
      // Mongoose 8+ uses these automatically, but explicit for clarity
      serverSelectionTimeoutMS: 15000,
      socketTimeoutMS: 45000,
    });

    isConnected = true;
    console.log(`[DB] Connected to MongoDB — database: ${config.mongo.dbName}`);
  } catch (error) {
    console.error('[DB] MongoDB connection failed:', error.message);
    throw error;
  }

  mongoose.connection.on('error', (err) => {
    console.error('[DB] MongoDB runtime error:', err.message);
  });

  mongoose.connection.on('disconnected', () => {
    console.warn('[DB] MongoDB disconnected');
    isConnected = false;
  });
}

export async function disconnectDatabase() {
  if (!isConnected) return;
  await mongoose.disconnect();
  isConnected = false;
  console.log('[DB] MongoDB disconnected gracefully');
}

export function getConnectionState() {
  return {
    isConnected,
    readyState: mongoose.connection.readyState,
    // 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting
  };
}

export default { connectDatabase, disconnectDatabase, getConnectionState };