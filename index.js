const port = 3000;
const express = require('express');

const app = express();

app.listen(port, function () {
    console.log(`running on port ${port}`)
})