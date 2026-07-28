export function requestLogger(req, _res, next) {
  const start = Date.now();
  const originalEnd = _res.end;

  _res.end = function (...args) {
    const duration = Date.now() - start;
    console.log(
      `[${new Date().toISOString()}] ${req.method} ${req.originalUrl} ${_res.statusCode} ${duration}ms`
    );
    return originalEnd.apply(this, args);
  };

  next();
}

export default requestLogger;