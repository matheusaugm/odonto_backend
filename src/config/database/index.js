import {DataSource} from 'typeorm';
import {configDotenv} from "dotenv";
import User from "../../models/User.js";
import Session from "../../models/Session.js";


configDotenv();


    const dataSource = new DataSource({
        type: 'mysql',
        host: process.env.NODE_ENV === 'production' ? process.env.DB_HOST : 'localhost',
        port: process.env.DB_PORT,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        synchronize: true,
        database: process.env.DB_NAME,
        entities:[User, Session],
        logging: true
    })



export default dataSource;
