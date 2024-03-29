require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const docs = require('./docs/swagger.json')

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
const tvSeriesGenresRoute = require('./server/routes/tvSeriesGenresRoutes')
const tvEpisodesGenresRoute = require('./server/routes/tvEpisodesGenresRoutes')
const moviesGenresRoute = require('./server/routes/moviesGenresRoutes')
const crewMembersTvSeriesRoute = require('./server/routes/crewMembersTvSeriesRoutes')
const crewMembersTvEpisodesRoute = require('./server/routes/crewMembersTvEpisodesRoutes')
const crewMembersRolesRoute = require('./server/routes/crewMembersRolesRoutes')
const crewMembersMoviesRoute = require('./server/routes/crewMembersMoviesRoutes')

//Middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

//Routes
app.use('/api/v1', crewMembersRoute);
app.use('/api/v1', genresRoute);
app.use('/api/v1', moviesRoute);
app.use('/api/v1', reviewsRoute);
app.use('/api/v1', rolesRoute);
app.use('/api/v1', tvEpisodesRoute);
app.use('/api/v1', tvSeriesRoute);
app.use('/api/v1', usersRoute);
app.use('/api/v1', tvSeriesGenresRoute);
app.use('/api/v1', tvEpisodesGenresRoute);
app.use('/api/v1', moviesGenresRoute);
app.use('/api/v1', crewMembersTvSeriesRoute);
app.use('/api/v1', crewMembersTvEpisodesRoute);
app.use('/api/v1', crewMembersRolesRoute);
app.use('/api/v1', crewMembersMoviesRoute);
app.use('/api/v1/api-docs', swaggerUI.serve, swaggerUI.setup(docs))

app.get('/', (req, res) => {
    res.send('Server up & running ✅');
  })

app.listen(PORT, () => console.log(`Listening on port:${PORT}`))
