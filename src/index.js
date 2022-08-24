import express from "express";
import exphbs from "express-handlebars";
import methodOverride from "method-override";
import session from "express-session";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import indexRoutes from "./routes/index.js";
import productsRoutes from "./routes/products.js";
import userRoutes from "./routes/users.js";

//Initializations
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
//import { connectDB } from "./database.js";

//Settings
app.set('port', process.env.PORT || 3000);
app.set("views", join(__dirname, "views"));


// config view engine
const hbs = exphbs.create({
    defaultLayout: "main",
    layoutsDir: join(app.get("views"), "layouts"),
    partialsDir: join(app.get("views"), "partials"),
    extname: ".hbs",
});
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");

//Middlewares
app.use(express.urlencoded({extended: false}));
app.use(methodOverride("_method"));
app.use(session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
    })
);

//Global Variables

//Routes
app.use(indexRoutes);
app.use(userRoutes);
app.use(productsRoutes);


//Static Files
app.use(express.static(join(__dirname, 'public')))

//Server
app.listen(app.get('port'), () => {
    console.log("Server on Port: ", app.get("port"));
});