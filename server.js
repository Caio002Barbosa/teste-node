const express = require('express');
const upload = require('./upload');
const cors = require('cors');

const server = express();
const PORT = process.env.PORT || 3000;

let corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};

server.use(cors(corsOptions));

server.post('/upload', upload);

server.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
