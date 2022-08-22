module.exports = {
    get:{
        tags:['users'],
        description: "Get all user",
        operationId: "getUsers",
        parameters:[],
        responses:{
            '200':{
                description:"Users were obtained",
                content:{
                    'application/json':{
                        schema:{
                            $ref:"#/components/schemas/users"
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