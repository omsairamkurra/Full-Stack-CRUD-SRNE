import express from 'express'
import fileUpload from 'express-fileupload'
import cors from 'cors'
import ProductRoute from './routes/ProductRoute.js'


const app=express()
app.use(cors())
app.use(express.json())
app.use(fileUpload())
app.use(express.static("public"))
app.use(ProductRoute)



app.listen(4000,()=>{
    console.log("server is running on port 3000")
})