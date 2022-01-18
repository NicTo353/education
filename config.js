const mongoLogin = "gumerefov";
const mongoPassword = "gumrf123";

const port = 5000;

const mongoUrl = `mongodb+srv://${mongoLogin}:${mongoPassword}@cluster0.ckf90.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

module.exports = { port, mongoUrl };
