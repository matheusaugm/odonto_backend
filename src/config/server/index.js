import express from 'express';
import cors from 'cors';
import dataSource from '../database/index.js';
import passport from 'passport';
import session from 'express-session';
import userRouter from "../../routes/userRoutes.js";
import menuRouter from "../../routes/menuRoutes.js";

const app = express();

try {
   await dataSource.initialize();
   console.log('Conectado ao banco');
} catch (e) {
    console.log('Erro ao conectar ao banco');
   console.error(e);
}
const corsOptions = {
    origin: ['https://snack-web-player.s3.us-west-1.amazonaws.com', 'https://localhost:3000','https://localhost:19006'],
    credentials: true,
};

app.use(cors(corsOptions));

// Add session handling before initializing passport
app.use(
   session({
      secret: process.env.SESSION_SECRET || 'default_secret', // Always use environment variables in production
      resave: false,
      saveUninitialized: false,
   }),
);

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(userRouter);
app.use(menuRouter);

app.use('*', (_req, res, next) => {
   const err = new Error('Not Found');
   res.status(404).send({ message: err.message });
   next(err);
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err, res, _next) => {
   console.error(err.stack);
   res.status(500).send({ message: 'Internal server error' });
});

app.set('port', process.env.PORT || 3000);
console.log('Rotas:');
console.log('userRoutes',userRouter.stack.map((item) => item.route.path));
console.log('menuRoutes',menuRouter.stack.map((item) => item.route.path));

export default app;
