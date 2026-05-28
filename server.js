import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const distPath = path.join(__dirname, 'dist');

console.log('Starting server...');
console.log('Dist path:', distPath);
console.log('Port:', PORT);

// Middleware to handle SPA routing
app.use((req, res, next) => {
  const filePath = path.join(distPath, req.path);
  
  // Check if request path is a file (has extension and exists)
  if (path.extname(req.path) && fs.existsSync(filePath)) {
    // It's a static file, serve it
    return express.static(distPath)(req, res, next);
  }
  
  // Otherwise, serve index.html (let React Router handle it)
  const indexPath = path.join(distPath, 'index.html');
  console.log('Route:', req.path, '-> serving index.html');
  res.sendFile(indexPath, (err) => {
    if (err) {
      console.error('Error:', err.message);
      res.status(404).send('Not found');
    }
  });
});

// Error handling
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).send('Server error');
});

const server = app.listen(PORT, () => {
  console.log(`✓ Server running on port ${PORT}`);
});

process.on('unhandledRejection', (err) => {
  console.error('Unhandled rejection:', err);
});
