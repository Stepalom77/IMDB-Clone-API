module.exports = {
    delete:{
        tags:['tv-series'],
        description: "Delete tv series",
        operationId: "deleteTvSeries",
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
            '204':{
                description:"Tv series was deleted",
            },
            '404':{
                description: "Tv series was not found",
                content:{
                    'application/json':{
                        schema:{
                            $ref:'#/components/schemas/Error',
                            example:{
                                message:"The tv series you are trying to delete does not exists",
                                internal_code:"Invalid id"
                            }
                        }
                    }
                }
            }
        }
    }
}