import userModel from '../models/user.model.js';

export default {
    getUsers: () => userModel.getUsers(),
    createUser: (value) => userModel.createUser(value),
    updateUser: (id, value) => userModel.updateUser(id, value),
    deleteUser: (id) => userModel.deleteUser(id)
}