const app = require('./app');

const port = process.env.PORT || 5001;
console.log(`Port is ${port}`);
app.listen(port, () => console.log(`Server listening at port ${port}`));
