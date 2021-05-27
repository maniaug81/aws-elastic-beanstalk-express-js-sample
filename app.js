const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World! we are creating something on AWS using DevOps, removed manual review comment'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
