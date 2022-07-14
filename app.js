require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 5000;

//Middlewares
//const router = require('./server/routes/index');
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json({ type: 'application/json' }));
app.use(express.json());
app.use(morgan('dev'));
//app.use('/api/v1', router);

app.get('/', (req, res) => {
    res.send('Server up & running ✅');
  })



app.listen(PORT, () => console.log(`Listening on port:${PORT}`))
