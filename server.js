import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

import productRouter from './routes/productRoutes.js';
import userRouter from './routes/userRoutes.js';
import orderRouter from './routes/orderRoutes.js';
import uploadRouter from './routes/uploadRoutes.js';
import newsRouter from './routes/newsRoutes.js'


dotenv.config();
mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log('Connected to db'))
.catch((err) => console.log(err.message))

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get('/api/keys/paypal', (req, res) => {
    res.send(process.env.PAYPAL|| 'sb');
  });

app.get('/api/keys/google', (req, res) => {
    res.send({key: process.env.GOOGLE_API_KEY || ''});
  });




app.use('/api/products', productRouter)

app.use('/api/users', userRouter)

app.use('/api/orders', orderRouter)

app.use('/api/upload', uploadRouter)

app.use('/api/news', newsRouter)

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/frontend/build')));
app.get('*', (req,res) => 
   res.sendFile(path.join(__dirname, '/frontend/build/index.html'))
)

app.use((err, req, res, next) => {
    res.status(500).send({message: err.message})
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server ok on ${port}`)
})