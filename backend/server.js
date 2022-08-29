import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import ProductRoutes from './routes/productRoutes.js'
import UserRoutes from './routes/userRoutes.js'
import OrderRoute from './routes/orderRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
import path from 'path';
import morgan from 'morgan';
const app = express();
if(process.env.NODE === 'development') {
    app.use(morgan('dev'))
}
app.use(express.json());


dotenv.config()

connectDB()


app.use('/api/products',ProductRoutes)
app.use('/api/users',UserRoutes)
app.use('/api/orders',OrderRoute)
app.use('/api/upload',uploadRoutes)
app.get('/api/config/paypal',(req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID)
})

const __dirname=path.resolve()
app.use('/uploads',express.static(path.join(__dirname, '/uploads')))

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '/frontend/build')))
    
    app.get('*',(req, res)=>{
        res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
    })
}else{
    app.get('/', (req, res) => {
        res.send('API is running')
    })

}


app.use(notFound)
app.use(errorHandler)

const PORT=process.env.PORT || 5000
app.listen(PORT,console.log(`server listening on port ${PORT}`));