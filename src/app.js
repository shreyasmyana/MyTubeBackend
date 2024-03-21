import cors from 'cors'
import cookieParser from 'cookie-parser'
import express from 'express'

const app = express()

app.use(cors())
app.use(cookieParser())
app.use(express.json({limit:'16kb'}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))

export {app}


