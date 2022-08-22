module.exports = {
    get:{
        tags:['tv-series'],
        description: "Get all tv series",
        operationId: "getTvSeries",
        parameters:[],
        responses:{
            '200':{
                description:"All Tv series were obtained",
                content:{
                    'application/json':{
                        schema:{
                            $ref:"#/components/schemas/tv_series"
                        }
                    }
                }
            },
            '400':{
                description: "Bad Request",
                content:{
                    'application/json':{
                        schema:{
                            $ref:'#/components/schemas/Error',
                            example:{
                                message:"There was an error"
                            }
                        }
                    }
                }
            }
        }
    }
}