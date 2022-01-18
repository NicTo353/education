const port = 5000;

const secret = "RANDOM_SECRET_KEY";

const mongoLogin = "gumerefov";
const mongoPassword = "gumrf123";
const mongoUrl = `mongodb+srv://${mongoLogin}:${mongoPassword}@cluster0.ckf90.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

module.exports = { port, mongoUrl, secret };
