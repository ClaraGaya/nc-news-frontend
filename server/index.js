const app = require('./server');
const PORT = process.env.PORT || 9090;

app.listen(PORT, (err) => {
    if (err) return console.log('ERROR: ', err);
    console.log(`App listening on port ${PORT}`);
});