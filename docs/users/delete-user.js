module.exports = {
    delete:{
        tags:['users'],
        description: "Delete user",
        operationId: "deleteUser",
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
            '204':{
                description:"User was deleted",
            },
            '404':{
                description: "User was not found",
                content:{
                    'application/json':{
                        schema:{
                            $ref:'#/components/schemas/Error',
                            example:{
                                message:"The user you are trying to delete does not exists",
                                internal_code:"Invalid id"
                            }
                        }
                    }
                }
            }
        }
    }
}