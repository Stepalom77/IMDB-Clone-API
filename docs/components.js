module.exports = {
    components: {
        schemas: {
            users: {
                type: 'object',
                properties: {
                    id: {
                        type: 'integer',
                        description: "The auto-generated id of user's account.",
                        example: "1"
                    },
                    username: {
                        type: 'string',
                        description: "The username of the user's account.",
                        example: "john55"
                    },
                    password: {
                        type: 'string',
                        description: "The hashed password of the user's account.",
                        example: "$argon2id$v=19$m=4096,t=3,p=1$drhulsNRIou+43HsUfdjLA$FyGAu1WcTQ3r60ood6/esa2A0lThiEnG5EXRc2Y1M1o"
                    },
                    email: {
                        type: 'string',
                        description: "The email of the user.",
                        example: "john@email.com"
                    },
                    image: {
                        type: 'string',
                        description: "The url of the profile image of the user's account."
                    },
                    createdAt: {
                        type: 'date',
                        description: "Date of creation of the account.",
                        example:"2022-07-25T02:14:59.991Z"
                    },
                    updatedAt: {
                        type: 'date',
                        description: "Date that the account was updated.",
                        example: "2022-07-25T02:14:59.991Z"
                    }
                }
            },
            movies: {
                type: 'object',
                properties: {
                    id: {
                        type: 'integer',
                        description: "The auto-generated id of movie.",
                        example: "1"
                    },
                    name: {
                        type: 'string',
                        description: "The name of a movie.",
                        example: "El Camino"
                    },
                    rating: {
                        type: 'integer',
                        description: "The star rating in a scale from 1 to 5 of a movie.",
                        example: "5"
                    },
                    popularity: {
                        type: 'integer',
                        description: "The current rank of popularity of the movie.",
                        example: "1"
                    },
                    year: {
                        type: 'integer',
                        description: "The year the movie was made.",
                        example: "2021"
                    },
                    runtime: {
                        type: 'string',
                        description: "The runtime of the movie.",
                        example: "130 minutes"
                    },
                    description: {
                        type: 'text',
                        description: "A summary of the movie's plot.",
                        example: "After the events of Breaking Bad, Jessie Pinkman finds himself on the run and trying to start a new life."
                    },
                    image: {
                        type: 'string',
                        description: "The url of the main image of the movie."
                    },
                    createdAt: {
                        type: 'date',
                        description: "Date of creation of the movie.",
                        example:"2022-07-25T02:14:59.991Z"
                    },
                    updatedAt: {
                        type: 'date',
                        description: "Date that the movie was updated",
                        example: "2022-07-25T02:14:59.991Z"
                    },
                }
            },
            tv_series: {
                type: 'object',
                properties: {
                    id: {
                        type: 'integer',
                        description: "The auto-generated id of tv series.",
                        example: "2"
                    },
                    name: {
                        type: 'string',
                        description: "The name of a tv series.",
                        example: "Breaking Bad"
                    },
                    rating: {
                        type: 'integer',
                        description: "The star rating in a scale from 1 to 5 of a tv series.",
                        example: "5"
                    },
                    popularity: {
                        type: 'integer',
                        description: "The current rank of popularity of the tv series.",
                        example: "2"
                    },
                    year: {
                        type: 'integer',
                        description: "The year the tv series was made.",
                        example: "2008"
                    },
                    number_episodes: {
                        type: 'integer',
                        description: "The number of episodes that the tv series has.",
                        example: "62"
                    },
                    description: {
                        type: 'text',
                        description: "A summary of the tv series's plot.",
                        example: "A chemistry teacher with lung cancer start cooking meth to earn money for his family before he dies.."
                    },
                    image: {
                        type: 'string',
                        description: "The url of the main image of the tv series."
                    },
                    createdAt: {
                        type: 'date',
                        description: "Date of creation of the tv series.",
                        example:"2022-07-25T02:14:59.991Z"
                    },
                    updatedAt: {
                        type: 'date',
                        description: "Date that the series was updated",
                        example: "2022-07-25T02:14:59.991Z"
                    },
                }
            },
            tv_episodes: {
                type: 'object',
                properties: {
                    id: {
                        type: 'integer',
                        description: "The auto-generated id of tv episode.",
                        example: "10"
                    },
                    name: {
                        type: 'string',
                        description: "The name of an tv episode.",
                        example: "Pilot"
                    },
                    rating: {
                        type: 'integer',
                        description: "The star rating in a scale from 1 to 5 of an tv episode.",
                        example: "4"
                    },
                    runtime: {
                        type: 'string',
                        description: "The runtime of the tv episode.",
                        example: "52 minutes"
                    },
                    year: {
                        type: 'integer',
                        description: "The year the tv episode  was made.",
                        example: "2008"
                    },
                    image: {
                        type: 'string',
                        description: "The url of the main image of the tv episode."
                    },
                    description: {
                        type: 'text',
                        description: "A summary of the tv episode's plot.",
                        example: "Walter White is a chemist working has a teacher and part time in a car wash. When he finds out he has lung cancer, he decides to make extremes choices to leave some money to his family."
                    },
                    tv_series_id: {
                        type: 'integer',
                        description: "Id of the tv series to which this tv episode belongs to.",
                        example:"2"
                    },
                    createdAt: {
                        type: 'date',
                        description: "Date of creation of the tv episode.",
                        example:"2022-07-25T02:14:59.991Z"
                    },
                    updatedAt: {
                        type: 'date',
                        description: "Date that the tv episode was updated",
                        example: "2022-07-25T02:14:59.991Z"
                    }
                }
            },
            crew_members: {
                type: 'object',
                properties: {
                    id: {
                        type: 'integer',
                        description: "The auto-generated id of the crew member.",
                        example: "7"
                    },
                    first_name: {
                        type: 'string',
                        description: "The first name of the crew member.",
                        example: "John"
                    },
                    last_name: {
                        type: 'string',
                        description: "The last name of the crew member.",
                        example: "Doe"
                    },
                    birthday: {
                        type: 'date',
                        description: "Birthday of the crew member.",
                        example: "1990-03-22"
                    },
                    photo: {
                        type: 'string',
                        description: "The url of the main photo of the crew member.",
                        example: "2008"
                    },
                    createdAt: {
                        type: 'date',
                        description: "Date of creation of the crew member.",
                        example:"2022-07-25T02:14:59.991Z"
                    },
                    updatedAt: {
                        type: 'date',
                        description: "Date that the crew member was updated",
                        example: "2022-07-25T02:14:59.991Z"
                    }
                }
            },
            reviews: {
                type: 'object',
                properties: {
                    id: {
                        type: 'integer',
                        description: "The auto-generated id of the review.",
                        example: "3"
                    },
                    title: {
                        type: 'string',
                        description: "The title of the review.",
                        example: "Great Movie!"
                    },
                    description: {
                        type: 'text',
                        description: "The main content of the review.",
                        example: "This was an incredible movie, the acting was out of this world, the directing nad cinematography was also of the charts!"
                    },
                    rating: {
                        type: 'integer',
                        description: "The star rating in a scale from 1 to 5 that the user gave to the movie or tv series or tv episode which the review is about.",
                        example: "5"
                    },
                    number_upvotes: {
                        type: 'integer',
                        description: "The number of 'helpful' votes that the review has .",
                        example: "100"
                    },
                    number_downvotes: {
                        type: 'integer',
                        description: "The number of 'unhelpful' votes that the review has.",
                        example: "20"
                    },
                    users_id: {
                        type: 'integer',
                        description: "The id of the user that wrote this review.",
                        example: "1"
                    },
                    movies_id: {
                        type: 'integer',
                        description: "The id of the movie about which the review is about.",
                        example: "3"
                    },
                    tv_series_id: {
                        type: 'integer',
                        description: "The id of the tv series about which the review is about.",
                        example: "1"
                    },
                    tv_episodes_id: {
                        type: 'integer',
                        description: "The id of the tv episode about which the review is about.",
                        example: "7"
                    },
                    createdAt: {
                        type: 'date',
                        description: "Date of creation of the review.",
                        example:"2022-07-25T02:14:59.991Z"
                    },
                    updatedAt: {
                        type: 'date',
                        description: "Date that the review was updated",
                        example: "2022-07-25T02:14:59.991Z"
                    }
                }
            },
            roles: {
                type: 'object',
                properties: {
                    id: {
                        type: 'integer',
                        description: "The auto-generated id of role.",
                        example: "4"
                    },
                    name: {
                        type: 'string',
                        description: "The name of the role.",
                        example: "Actor"
                    },
                    createdAt: {
                        type: 'date',
                        description: "Date of creation of the role.",
                        example:"2022-07-25T02:14:59.991Z"
                    },
                    updatedAt: {
                        type: 'date',
                        description: "Date that the role was updated",
                        example: "2022-07-25T02:14:59.991Z"
                    },
                }
            },
            genres: {
                type: 'object',
                properties: {
                    id: {
                        type: 'integer',
                        description: "The auto-generated id of genre.",
                        example: "9"
                    },
                    name: {
                        type: 'string',
                        description: "The name of the genre.",
                        example: "Drama"
                    },
                    createdAt: {
                        type: 'date',
                        description: "Date of creation of the genre.",
                        example:"2022-07-25T02:14:59.991Z"
                    },
                    updatedAt: {
                        type: 'date',
                        description: "Date that the genre was updated",
                        example: "2022-07-25T02:14:59.991Z"
                    },
                }
            },
            tv_series_genres: {
                type: 'object',
                properties: {
                    id: {
                        type: 'integer',
                        description: "The auto-generated id of this table.",
                        example: "1"
                    },
                    tv_series_id: {
                        type: 'integer',
                        description: "The id of the tv series related to this table.",
                        example: "2"
                    },
                    genres_id: {
                        type: 'integer',
                        description: "The id of the genre related to this table",
                        example: "9"
                    },
                    createdAt: {
                        type: 'date',
                        description: "Date of creation of this table.",
                        example:"2022-07-25T02:14:59.991Z"
                    },
                    updatedAt: {
                        type: 'date',
                        description: "Date that this table was updated",
                        example: "2022-07-25T02:14:59.991Z"
                    },
                }
            },
            tv_episodes_genres: {
                type: 'object',
                properties: {
                    id: {
                        type: 'integer',
                        description: "The auto-generated id of this table.",
                        example: "6"
                    },
                    tv_episodes_id: {
                        type: 'integer',
                        description: "The id of the tv episode related to this table.",
                        example: "1"
                    },
                    genres_id: {
                        type: 'integer',
                        description: "The id of the genre related to this table",
                        example: "9"
                    },
                    createdAt: {
                        type: 'date',
                        description: "Date of creation of this table.",
                        example:"2022-07-25T02:14:59.991Z"
                    },
                    updatedAt: {
                        type: 'date',
                        description: "Date that this table was updated",
                        example: "2022-07-25T02:14:59.991Z"
                    },
                }
            },
            movies_genres: {
                type: 'object',
                properties: {
                    id: {
                        type: 'integer',
                        description: "The auto-generated id of this table.",
                        example: "5"
                    },
                    movies_id: {
                        type: 'integer',
                        description: "The id of the movie related to this table.",
                        example: "7"
                    },
                    genres_id: {
                        type: 'integer',
                        description: "The id of the genre related to this table",
                        example: "8"
                    },
                    createdAt: {
                        type: 'date',
                        description: "Date of creation of this table.",
                        example:"2022-07-25T02:14:59.991Z"
                    },
                    updatedAt: {
                        type: 'date',
                        description: "Date that this table was updated",
                        example: "2022-07-25T02:14:59.991Z"
                    },
                }
            },
            crew_members_movies: {
                type: 'object',
                properties: {
                    id: {
                        type: 'integer',
                        description: "The auto-generated id of this table.",
                        example: "11"
                    },
                    crew_members_id: {
                        type: 'integer',
                        description: "The id of the crew member related to this table.",
                        example: "19"
                    },
                    movies_id: {
                        type: 'integer',
                        description: "The id of the movie related to this table",
                        example: "2"
                    },
                    createdAt: {
                        type: 'date',
                        description: "Date of creation of this table.",
                        example:"2022-07-25T02:14:59.991Z"
                    },
                    updatedAt: {
                        type: 'date',
                        description: "Date that this table was updated",
                        example: "2022-07-25T02:14:59.991Z"
                    },
                }
            },
            crew_members_tv_series: {
                type: 'object',
                properties: {
                    id: {
                        type: 'integer',
                        description: "The auto-generated id of this table.",
                        example: "12"
                    },
                    crew_members_id: {
                        type: 'integer',
                        description: "The id of the crew member related to this table.",
                        example: "9"
                    },
                    tv_series_id: {
                        type: 'integer',
                        description: "The id of the tv series related to this table",
                        example: "2"
                    },
                    createdAt: {
                        type: 'date',
                        description: "Date of creation of this table.",
                        example:"2022-07-25T02:14:59.991Z"
                    },
                    updatedAt: {
                        type: 'date',
                        description: "Date that this table was updated",
                        example: "2022-07-25T02:14:59.991Z"
                    },
                }
            },
            crew_members_tv_episodes: {
                type: 'object',
                properties: {
                    id: {
                        type: 'integer',
                        description: "The auto-generated id of this table.",
                        example: "17"
                    },
                    crew_members_id: {
                        type: 'integer',
                        description: "The id of the crew member related to this table.",
                        example: "14"
                    },
                    tv_episodes_id: {
                        type: 'integer',
                        description: "The id of the tv episode related to this table",
                        example: "18"
                    },
                    createdAt: {
                        type: 'date',
                        description: "Date of creation of this table.",
                        example:"2022-07-25T02:14:59.991Z"
                    },
                    updatedAt: {
                        type: 'date',
                        description: "Date that this table was updated",
                        example: "2022-07-25T02:14:59.991Z"
                    },
                }
            },
            crew_members_roles: {
                type: 'object',
                properties: {
                    id: {
                        type: 'integer',
                        description: "The auto-generated id of this table.",
                        example: "17"
                    },
                    crew_members_id: {
                        type: 'integer',
                        description: "The id of the crew member related to this table.",
                        example: "22"
                    },
                    roles_id: {
                        type: 'integer',
                        description: "The id of the role related to this table",
                        example: "21"
                    },
                    createdAt: {
                        type: 'date',
                        description: "Date of creation of this table.",
                        example:"2022-07-25T02:14:59.991Z"
                    },
                    updatedAt: {
                        type: 'date',
                        description: "Date that this table was updated",
                        example: "2022-07-25T02:14:59.991Z"
                    },
                }
            },
            Error:{
                type:'object',
                properties:{
                    message:{
                        type:'string'
                    },
                    internal_code:{
                        type:'string'
                    }
                }
            }
        }
    }
}
