import express from "express";
import mysqlDb from "../mysqlDb";
import {ApiNews, News, NewsMutation} from "../types";
import {OkPacketParams} from "mysql2";
import {imagesUpload} from "../multer";

const newsRouter = express.Router();

newsRouter.get('/', async (req, res) => {
    const connection =  mysqlDb.getConnection();
    const result = await connection.query('SELECT id, title, image, createdAt FROM news');
    const newsList = result[0] as ApiNews[];
     res.send(newsList);
});
newsRouter.get('/:id', async (req, res) => {
    const connection =  mysqlDb.getConnection();
    try {
        const result = await connection.query(
            'SELECT * FROM news WHERE id = ?', [req.params.id]);
        const newsList = result[0] as News[];
        const news = newsList[0];
        res.send(news);
        if(!news) {
            return res.status(404).send({ERROR: 'News not found!'});
        }
    }catch (e) {
        res.status(404).send('News not found!');
    }


});
newsRouter.post('/', imagesUpload.single('image') ,async (req, res) => {
    if(!req.body.title || !req.body.text){
        return res.status(404).send({ERROR: 'Title field is required!'});
    }
    const newsData: NewsMutation = {
        title: req.body.title,
        text: req.body.text,
        image: req.file ? req.file.filename : null,
    }
    const connection =  mysqlDb.getConnection();
    const result = await connection.query(
        'INSERT INTO news (title, text, image) VALUES (?, ?, ?)',
        [newsData.title, newsData.text, newsData.image]
    );
    const info = result[0] as OkPacketParams;
    res.send({
        ...newsData,
        id: info.insertId,
    });
});
newsRouter.delete('/:id', async (req, res) => {
    const connection =  mysqlDb.getConnection();
    try {
         await connection.query(
            'DELETE FROM ?? WHERE id = ?',
            [req.params.id]
        );
        res.send(`News post if = ${req.params.id}  was deleted!` );
    }catch (e) {
        res.status(400).send('Restrict delete!')
    }

});


export default newsRouter;