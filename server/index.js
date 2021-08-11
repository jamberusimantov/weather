const dotenv = require("dotenv");
dotenv.config();
const packageJson = require('../package.json')


const cors = require("cors");
const express = require("express");
const chalk = require("chalk");
const db = require("./DB");
const path = require("path");
// const fs = require('fs')
// const https = require('https')
const city_router = require('./api/city/city_router')
const { fetchInterval } = require('./api/city/city.utils')
const PORT = process.env.PORT || 4201;


const app = express();
app.use('/cities', city_router);

app.set("trust proxy", true);
app.use(express.json({ extended: true, limit: "30mb" }));
app.use(express.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors({ origin: "*" }));
db.on("error", () => {
    console.log(chalk.red("Connection error"));
});

// const sslServer = https.createServer({
//     key: fs.readFileSync(path.join(__dirname, "cert", "key.pem")),
//     cert: fs.readFileSync(path.join(__dirname, "cert", "cert.pem"))
// }, app)

// sslServer
app.listen(PORT, () => {
    console.log(chalk.blue(`${packageJson.name} - ${packageJson.description}`));
    console.log(`${chalk.yellow("live and up on port")} ${chalk.red(PORT)}`);
});

if (process.env.NODE_ENV === "production") {
    // Serve any static files
    app.use(express.static(path.join(__dirname, "../client/build")));
    // Handle React routing, return all requests to React app
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../client/build", "index.html"));
    });
}

fetchInterval();