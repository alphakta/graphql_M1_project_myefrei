import userModel from '../models/user.model.js';
import jwt from 'jsonwebtoken';

const validateLoginUser = (email, password) => {
  if (!email || email === '') {
    throw new Error('email est requis');
  }
  if (!password || password === '') {
    throw new Error('password est requis');
  }
}

export default {
    loginUser: async (req, res, next) => {
        const { email, password } = req.body;

        validateLoginUser(email, password)
        const user = await userModel.findUser({ email, password });
      
        if (!user) { throw new Error('User not found') }
        
        const token = jwt.sign({ id: user.id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1800s' });
        res.status(201).json({ user, token });
        
    }
}