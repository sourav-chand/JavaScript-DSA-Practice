import { config } from './config/index.js';
import { connectDatabase, disconnectDatabase } from './db/db.js';
import app from './app.js';

async function startServer() {
  try {
    // Connect to MongoDB
    await connectDatabase();

    // Start HTTP server
    const server = app.listen(config.port, () => {
      console.log(`
========================================
  Express CRUD API Server (MongoDB)
========================================
  Environment : ${config.env}
  Port        : ${config.port}
  Database    : MongoDB — ${config.mongo.dbName}
  URL         : http://localhost:${config.port}
========================================
  Endpoints:
  - GET    /api/health
  - GET    /api/users
  - POST   /api/users
  - GET    /api/users/:id
  - PUT    /api/users/:id
  - DELETE /api/users/:id
  - GET    /api/users/:id/posts
  - GET    /api/posts
  - POST   /api/posts
  - GET    /api/posts/:id
  - PUT    /api/posts/:id
  - DELETE /api/posts/:id
========================================
      `);
    });

    // Graceful shutdown
    const shutdown = async (signal) => {
      console.log(`\n[Server] Received ${signal}. Shutting down gracefully...`);
      server.close(async () => {
        await disconnectDatabase();
        console.log('[Server] Closed');
        process.exit(0);
      });
      setTimeout(() => {
        console.error('[Server] Forced shutdown after timeout');
        process.exit(1);
      }, 10000);
    };

    process.on('SIGINT', () => shutdown('SIGINT'));
    process.on('SIGTERM', () => shutdown('SIGTERM'));
    process.on('unhandledRejection', (reason) => {
      console.error('[Server] Unhandled Rejection:', reason);
    });
  } catch (error) {
    console.error('[Server] Failed to start:', error);
    process.exit(1);
  }
}

startServer();