
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dataSource from "../config/database/index.js";
import {configDotenv} from "dotenv";
import Session from "../models/Session.js";
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
    return { user, token };
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
    return { user, token };
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