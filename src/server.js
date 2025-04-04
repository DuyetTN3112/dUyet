import express from "express";
// import initWebRoutes from "./routes/web";
import bodyParser from "body-parser";
import initApiRoutes from "./routes/api";
require("dotenv").config();
import configCors from "./config/cors";
import cookieParser from "cookie-parser";


const app = express();  // app
const PORT = process.env.PORT || 8088;


// config view Engine of app
// configViewEngine(app);

// config body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// config cors policy
configCors(app);

// test jwt 
// createJWT();
// let decodedData = verifyToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVGFkdWNtYW5oIiwiYWRkcmVzcyI6Im1hdSBsdW9uZyIsImlhdCI6MTc0MTc5NTA3OH0.v7oBJ0NibRvhL21nnUxU3809CLaLJydXM4tL6CMOPN0");
// console.log(decodedData);

// config cookie parser
app.use(cookieParser());

app.use((request, response, next) => {
    // console.log(">>> check new request");
    // console.log("host: ", request.hostname);
    // console.log("path: ", request.path);
    // console.log("method: ", request.method);
    next();
})

// config api of app
initApiRoutes(app);

// init web routes of app
// initWebRoutes(app);



app.use((request, response) => {
    return response.send("404 not found");
})


app.listen(PORT, () => {
    console.log(">>>> JWT Backend is running on the port: ", PORT);
})   