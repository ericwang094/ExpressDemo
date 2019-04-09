const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(adminRouter);
app.use(shopRouter);



const server = http.createServer(app);

server.listen(5000);