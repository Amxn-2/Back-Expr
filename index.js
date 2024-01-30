const express = require('express');
const app = express();
const port = 3000;

const logMiddleware = (req, res, next) => {
    console.log(`Request received at ${new Date()}`);
    res.send('Hello');
    next();
};

app.use('/home', logMiddleware);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
