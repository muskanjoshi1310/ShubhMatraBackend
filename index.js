import express from "express";
import bodyParser from "body-parser";
import userRouters from "./routes/user.router.js";
import productRouters from "./routes/product.router.js";
import categoryRouters from "./routes/category.router.js";
import orderRoutes from "./routes/orderRoutes.js"
import CartRouter from "./routes/cart.route.js"
import AdminRouter from "./routes/admin.router.js"

import {} from "./DataBase/DBConfig.js";

const app = new express;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use("/user",userRouters);
app.use("/product", productRouters);
app.use("/category", categoryRouters);
app.use("/orders",orderRoutes)
app.use("/cart",CartRouter);
app.use("/admin",AdminRouter);

app.listen(3000, () => console.log("server started....."));

//npm install express mongoose bcryptjs jsonwebtoken express-validator
