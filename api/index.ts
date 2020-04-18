import express from 'express';
import apiRouter from './api';

const port = process.env.PORT || 4000;
const appDir = process.env.APP_DIR || './dist/app';

const app = express();
app.use(express.json({ limit: '10mb' }));
app.use('/api', apiRouter);
app.use(express.static(appDir));

app.listen(port, () => {
  console.log(`Serving static files from ${appDir}`);
  console.log(`Server is listening on port ${port}`);
});
