import express from 'express';
import cors from 'cors';
import router from '../../routes/userRoutes.js';
import dataSource from '../database/index.js';
import passport from 'passport';
import session from 'express-session';

const app = express();

try {
   await dataSource.initialize();
   console.log('Conectado ao banco');
} catch (e) {
   console.error(e);
}

app.use(cors());

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
app.use(router);

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
console.log(router.stack.map((item) => item.route.path));

export default app;
