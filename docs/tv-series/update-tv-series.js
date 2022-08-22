module.exports = {
    post:{
        tags:['tv-series'],
        description: "Update tv series",
        operationId: "updateTvSeries",
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
                description:"The tv series was updated",
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
                                message:"The tv series you are trying to update does not exist",
                                internal_code:"Invalid id"
                            }
                        }
                    }
                }
            }
        }
    }
}