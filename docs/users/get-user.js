module.exports = {
    get:{
        tags:['users'],
        description: "Get one user",
        operationId: "getUser",
        parameters:[
            {
                name:"id",
                in:"path",
                schema:{
                    $ref:"#/components/schemas/id"
                },
                required:true,
                description: "The id of an user."
            }
        ],
        responses:{
            '200':{
                description:"User was obtained",
                content:{
                    'application/json':{
                        schema:{
                            $ref:"#/components/schemas/users"
                        }
                    }
                }
            },
            '404':{
                description: "User was not found",
                content:{
                    'application/json':{
                        schema:{
                            $ref:'#/components/schemas/Error',
                            example:{
                                message:"The user you are looking for does not exists",
                                internal_code:"Invalid id"
                            }
                        }
                    }
                }
            }
        }
    }
}