const app = require('./app');

const PORT = process.env.PORT 

app.listen(PORT, () => console.log(`Estamos on na port ${PORT}`));