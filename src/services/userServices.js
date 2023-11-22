
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dataSource from "../config/database/index.js";
import {configDotenv} from "dotenv";
import Session from "../models/Session.js";
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
configDotenv();

const secretKey = process.env.JWT_TOKEN // Troque por sua própria chave secreta

export async function createUser(data) {
    const userRepository = dataSource.getRepository(User);

    // Verifica se o e-mail já está registrado
    const existingUser = await userRepository.findOne({ where: { email: data.email } });
    if (existingUser) {
        throw new Error('Email já está em uso.');
    }

    // Criptografa a senha
    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = userRepository.create({
        ...data,
        password: hashedPassword
    });

    await userRepository.save(user);

    // Gera o token JWT
    const token = jwt.sign({ id: user.id }, secretKey, { expiresIn: '1d' }); // O token expira em 1 dia
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const sessionRepository = dataSource.getRepository(Session);
    await sessionRepository.save({ token, usuario_sessao_id: user.id, data_expiracao:tomorrow }); // Correção aqui
    const {password, ...userWithoutPassword} = user;

    return { userWithoutPassword, token };
}

export async function login(data) {
    const userRepository = dataSource.getRepository(User);

    const user = await userRepository.findOne({ where: { email: data.email } });
    if (!user) {
        throw new Error('Email não encontrado.');
    }

    const isValidPassword = await bcrypt.compare(data.password, user.password);
    if (!isValidPassword) {
        throw new Error('Senha incorreta.');
    }

    // Gera o token JWT
    const token = jwt.sign({ id: user.id }, secretKey, { expiresIn: '1d' });

    const sessionRepository = dataSource.getRepository(Session);
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    await sessionRepository.save({ token, usuario_sessao_id: user.id, data_expiracao:tomorrow });
    const {password, ...userWithoutPassword} = user;
    return { userWithoutPassword, token };
}

export const deleteUserService = async (email) => {
    const userRepository = dataSource.getRepository(User);
    const user = await userRepository.findOne({ where: { email: email } });
    if (!user) {
        throw new Error('Email não encontrado.');
    }
    await userRepository.delete(user);
    return { message: "Usuário deletado com sucesso" };
}
passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback" // This URL needs to be registered in your Google Developer Console
    },
    async (accessToken, refreshToken, profile, cb) => {
        const userRepository = dataSource.getRepository(User);

        // Check if the user already exists in the database
        let user = await userRepository.findOne({ where: { email: profile.emails[0].value } });

        if (!user) {
            const newUserGoogleData ={
                name: profile.displayName,
                ra:'000000000',
                email: profile.emails[0].value,
                password: profile.id
            }
            // If the user doesn't exist, create a new one
            user = await createUser(newUserGoogleData);
        }
        const {password, ...userWithoutPassword} = user;

        return cb(null, userWithoutPassword);
    }));

// Serialize and deserialize user for session management (if you're using sessions)
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const userRepository = dataSource.getRepository(User);
    const user = await userRepository.findOne({where:{id: id}});
    const {password, ...userWithoutPassword} = user;
    done(null, userWithoutPassword);
});