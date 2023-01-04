const port = process.env.PORT || 3001;
const app = require('./app');
/* const mainRoutes = require('./Routes.js')
app.use(mainRoutes) */
app.listen(port);
console.log(`Api rodando na porta ${port}`);