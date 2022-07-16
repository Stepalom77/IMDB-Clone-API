require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 5000;

//Import routes
const crewMembersRoute = require('./server/routes/crewMembersRoutes');
const genresRoute = require('./server/routes/genresRoutes');
const moviesRoute = require('./server/routes/moviesRoutes');
const reviewsRoute = require('./server/routes/reviewsRoutes');
const rolesRoute = require('./server/routes/rolesRoutes');
const tvEpisodesRoute = require('./server/routes/tvEpisodesRoutes');
const tvSeriesRoute = require('./server/routes/tvSeriesRoutes');
const usersRoute = require('./server/routes/usersRoutes');

//Middlewares
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json({ type: 'application/json' }));
app.use(express.json());
app.use(morgan('dev'));

//Routes
app.use('/api/v1', crewMembersRoute);
app.use('/api/v1', genresRoute);
app.use('/api/v1', moviesRoute);
app.use('/api/v1', reviewsRoute);
app.use('/api/v1', rolesRoute);
app.use('/api/v1', tvEpisodesRoute);
app.use('/api/v1', tvSeriesRoute);
app.use('/api/v1', usersRoute);

app.get('/', (req, res) => {
    res.send('Server up & running ✅');
  })



app.listen(PORT, () => console.log(`Listening on port:${PORT}`))
