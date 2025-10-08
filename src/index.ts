import express from "express";
import dotenv from "dotenv"
dotenv.config()
import swaggerJsDoc from "swagger-jsdoc";
import { setup, serve } from "swagger-ui-express"
import swaggerConfig from "./../swagger.config"
import { dbConnect } from "./db/db";
import routes from "./app/routes/index"



const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());



app.get("", (req, res) => {
    console.log("connecting...");    
})

import userRoutes from './app/routes/userRoutes';

const swaggerDocs = swaggerJsDoc(swaggerConfig);
app.use("/swagger", serve, setup(swaggerDocs));
app.use('/api', userRoutes);

dbConnect().then(()=> {
    app.listen(port, () => {
        console.log(`Server runnning on port ${port}`);
    })
})
.catch(() => {
    console.log("Failed to connect to database");
    
})




