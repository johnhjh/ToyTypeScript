import app from './app';
import http from 'http';

const server = http.createServer(app);
const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
