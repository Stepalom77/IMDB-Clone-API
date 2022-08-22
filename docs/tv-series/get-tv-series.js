module.exports = {
    get:{
        tags:['tv-series'],
        description: "Get one tv series",
        operationId: "getTvSeries",
        parameters:[
            {
                name:"id",
                in:"path",
                schema:{
                    $ref:"#/components/schemas/id"
                },
                required:true,
                description: "The id of a tv series."
            }
        ],
        responses:{
            '200':{
                description:"The tv series was obtained",
                content:{
                    'application/json':{
                        schema:{
                            $ref:"#/components/schemas/tv_series"
                        }
                    }
                }
            },
            '404':{
                description: "The tv series was not found",
                content:{
                    'application/json':{
                        schema:{
                            $ref:'#/components/schemas/Error',
                            example:{
                                message:"The tv series you are looking for does not exists",
                                internal_code:"Invalid id"
                            }
                        }
                    }
                }
            }
        }
    }
}