module.exports = {
    post:{
        tags:['users'],
        description: "Update user",
        operationId: "updateUser",
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
                description:"User was updated",
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
                                message:"The user you are trying to update does not exist",
                                internal_code:"Invalid id"
                            }
                        }
                    }
                }
            }
        }
    }
}