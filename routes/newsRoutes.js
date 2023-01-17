import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import News from '../models/newsModel.js';

const newsRouter = express.Router();

newsRouter.get('/', async (req, res) => {
    const news = await News.find();
    res.send(news);
})

newsRouter.post('/', /* isAuth, isAdmin, */ expressAsyncHandler(async (req, res) => {
    const news = req.body;
    const newNews = new News({
        title: news.title,
        descr: news.descr,
        img: news.img,
        images: news.images
    })
    const savedNews = await newNews.save();
    res.send({ message: 'news created', savedNews })
}))

newsRouter.get('/:id', async (req, res) => {
    const news = await News.findById(req.params.id)
    if (news) {
        res.send(news)
    } else {
        res.status(404).send({ msg: "news not found" })
    }
})


export default newsRouter