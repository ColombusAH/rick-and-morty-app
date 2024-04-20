import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UserRepository from './repo';

class AuthService {
    static async register(username: string, password: string) {
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword);
        return UserRepository.createUser(username, hashedPassword);
    }

    static async login(username: string, password: string) {
        const secret = process.env.JWT_SECRET || 'secret';
        const user = await UserRepository.findUserByUsername(username);
        if (!user) {
            throw new Error('User not found');
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new Error('Invalid credentials');
        }
        const token = jwt.sign({ id: user.id }, secret, { expiresIn: '12h' });
        return token;
    }

    static async getUser(id: number) {
        return UserRepository.findUserById(id);
    }
}

export default AuthService;
