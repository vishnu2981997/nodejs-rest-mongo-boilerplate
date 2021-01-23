const express = require('express');
const bodyParser = require('body-parser');

const v1 = require('./v1');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

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
