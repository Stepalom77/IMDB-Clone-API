const getUser = require('./get-user');
const getUsers = require('./get-users');
const createUser = require('./create-user');
const updateUser = require('./update-user');
const deleteUser = require('./delete-user');


module.exports = {
    paths:{
        '/api/v1/users':{
            ...getUsers,
            ...createUser
        },
        '/api/v1/users/{id}':{
            ...getUser,
            ...updateUser,
            ...deleteUser
        }
    }
}