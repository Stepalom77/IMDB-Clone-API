require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const router = require('./server/routes');

app.use(bodyParser.json({ type: 'application/json' }));
app.use('/api/v1', router);

app.get('/', (req, res) => {
    res.send('Server up & running ✅');
  })



app.listen(PORT, () => console.log(`Listening on port:${PORT}`))
