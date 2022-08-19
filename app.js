require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const app = express();
const PORT = process.env.PORT || 5000;

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Clone of The Internet Movie Database API",
			version: "1.0.0",
			description: "Creating a API Clone of The Internet Movie Database",
		},
		servers: [
			{
				url: "http://localhost:5000",
        description: "Local server"
			},
      {
        url: "https://ste-imdb-clone.herokuapp.com/",
        description: "Production server"
      }
		],
	},
	apis: ["./server/routes/*.js"],
};

const specs = swaggerJsDoc(options);
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
app.use('/api/v1/api-docs', swaggerUI.serve, swaggerUI.setup(specs))

app.get('/', (req, res) => {
    res.send('Server up & running ✅');
  })



app.listen(PORT, () => console.log(`Listening on port:${PORT}`))
