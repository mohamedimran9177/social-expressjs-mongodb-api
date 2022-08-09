const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const cookieParser = require("cookie-Parser");
const postsRoute = require("./routes/posts");

dotenv.config();

//mongodb connection

mongoose.connect("mongodb://localhost:27017/dataBase", (err) => {
    if (!err) console.log("mongoDB connected");
    else console.log("mongodb not connected");
}
)

///middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cookieParser());

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postsRoute);

// handle bad req
app.use((req, res, next) => {
    res.status(404).json({ err: "Bad Request" })
})

app.listen(8800, () => {
    console.log("backend server is running");
})
