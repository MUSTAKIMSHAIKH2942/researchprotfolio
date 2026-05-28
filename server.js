import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const distPath = path.join(__dirname, 'dist');

console.log('Starting server...');
console.log('Dist path:', distPath);

// Disable express's default redirect for trailing slashes
app.use(express.static(distPath, { redirect: false }));

// SPA fallback - serve index.html for all non-file requests
app.use((req, res, next) => {
  // Check if the request is for a file (has an extension)
  if (path.extname(req.path)) {
    return next();
  }
  // Serve index.html for all route requests (no extension)
  console.log('Serving index.html for route:', req.path);
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
