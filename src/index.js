import 'dotenv/config'
import connectDB from "./db/index.js";
import app from './app.js';

connectDB()
    .then(()=>{
        app.listen(process.env.PORT,()=>{
            console.log(`Server listening on PORT: ${process.env.PORT}`)
        })
    })
    .catch((err)=>{
        console.log(`Error Connecting To Database ${err}`)
    })

