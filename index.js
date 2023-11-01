import app from './src/config/server/index.js';
const port = app.get('port')


app.listen(port, () => {
    console.info(`Servidor rodando na porta ${port} no ambiente de ${process.env.NODE_ENV}`)
})