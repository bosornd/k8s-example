import { injectDependencies } from '../common/config'
injectDependencies();

import express from 'express';

const app = express();
const port = 8080;

app.use('/', require('./logic'));

app.listen(port, () => {
    console.log(`[server]: Server is running at localhost:${port}`);
});