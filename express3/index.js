const express = require('express');

const app = express();

app.use(express.json());

class AppError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

app.get('/', (req, res) => {
  res.send('Hello! Try: /users, /users/42, /error, /async-error, /missing-page');
});

app.get('/users', (req, res) => {
  const users = ['Alice', 'Bob', 'Charlie'];
  res.json(users);
});

app.get('/users/:id', (req, res, next) => {
  const id = Number(req.params.id);
  if (!id) {
    return next(new AppError(400, 'Invalid user id - must be a number'));
  }
  if (id > 3) {
    return next(new AppError(404, 'User not found'));
  }
  res.json({ id, name: 'User ' + id });
});

app.get('/error', (req, res, next) => {
  const data = undefined;
  data.someMethod();
});

app.get('/async-error', async (req, res, next) => {
  try {
    const data = await fakeAsyncFunction();
    res.json(data);
  } catch (err) {
    next(err);
  }
});

function fakeAsyncFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(new AppError(503, 'Database is down')), 500);
  });
}

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);

  if (err.isOperational) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  res.status(500).json({ message: 'Something went wrong on our end' });
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
