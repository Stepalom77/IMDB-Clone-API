module.exports = {
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
        }
