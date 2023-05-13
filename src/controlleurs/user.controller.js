import userModel from '../models/user.model.js';
import bcrypt from 'bcrypt';

const ALLOWED_GENDERS = ['M', 'F'];

const validateUser = (input) => {
  const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;

  if (!input.username || input.username === '') {
    throw new Error('username est requis');
  }
  if (!input.password || input.password === '') {
    throw new Error('password est requis');
  }
  if (!input.email || input.email === '') {
    throw new Error('email est requis');
  }
  if (!input.first_name || input.first_name === '') {
    throw new Error('first_name est requis');
  }
  if (!input.last_name || input.last_name === '')  {
    throw new Error('last_name est requis');
  }
  if (input.gender && !ALLOWED_GENDERS.includes(input.gender)) {
    throw new Error(`gender doit être "M" ou "F", reçu "${input.gender}"`);
  }
  if (!input.date_of_birth || !dateRegex.test(input.date_of_birth)) {
    throw new Error(`date_of_birth doit être au format DD/MM/YYYY, reçu "${input.date_of_birth}"`);
  }
}

export default {
    getUsers: () => userModel.getUsers(),
    getUserById: ({id}) => userModel.getUserById(id),
    createUser: async ({value}) =>  {
        validateUser(value)

        // Hash password
        const passwordHash = await bcrypt.hash(value.password, 5)
        value.password = passwordHash

        userModel.createUser(value)
    },
    updateUser: async ({id, value}) =>{
      const user = await userModel.getUserById(id)
      const passwordUpdated = value.password !== undefined

      if (!user) { throw new Error(`L'utilisateur avec l'id ${id} n'existe pas`) }

      const updatedUser = { ...user, ...value }
      validateUser(updatedUser)

      // Hash password
      if(passwordUpdated) {
        const passwordHash = await bcrypt.hash(value.password, 5)
        value.password = passwordHash
      }

      userModel.updateUser(id, value)      
    },
    deleteUser: async ({id}) => {
      const user = await userModel.getUserById(id)
      if (!user) { throw new Error(`L'utilisateur avec l'id ${id} n'existe pas`) }
      userModel.deleteUser(id)
    }
}