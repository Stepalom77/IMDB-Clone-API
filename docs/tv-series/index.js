const getOneTvSeries = require('./get-tv-series');
const getTvSeries = require('./get-all-tv-series');
const createTvSeries = require('./create-tv-series');
const updateTvSeries = require('./update-tv-series');
const deleteTvSeries = require('./delete-tv-series');


module.exports = {
    paths:{
        '/api/v1/tv-series':{
            ...getTvSeries,
            ...createTvSeries
        },
        '/api/v1/tv-series/{id}':{
            ...getOneTvSeries,
            ...updateTvSeries,
            ...deleteTvSeries
        }
    }
}