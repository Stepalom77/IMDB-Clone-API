module.exports = {
    post:{
        tags:['tv-series'],
        description: "Create tv series",
        operationId: "createTvSeries",
        parameters:[],
        responses:{
            '201':{
                description:"Tv series was created",
                content:{
                    'application/json':{
                        schema:{
                            $ref:"#/components/schemas/tv_series_create"
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