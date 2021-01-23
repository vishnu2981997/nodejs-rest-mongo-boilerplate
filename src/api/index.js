const express = require('express');
const bodyParser = require('body-parser');
const db = require('./v1/databases/mongo');

const v1 = require('./v1');

const app = express();

app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({limit: '10mb', extended: true, parameterLimit: 50000}));

const config = {};
const router = express.Router;

app.use('/api', v1({config, router}));

// app.use((req, res, next) => {
//     return res.status(404).json({message: 'No such route exists'});
// });

// start server
const host = '0.0.0.0';
const port = 8080;
app.listen(port, host, () => {
    console.log('Server listening on port ' + port);
});
