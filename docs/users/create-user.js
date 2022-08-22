module.exports = {
    post:{
        tags:['users'],
        description: "Create user",
        operationId: "createUsers",
        parameters:[],
        responses:{
            '201':{
                description:"User was created",
                content:{
                    'application/json':{
                        schema:{
                            $ref:"#/components/schemas/users_create"
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
                                message:"The user you are trying to create already exist"
                            }
                        }
                    }
                }
            }
            
        }
    }
}