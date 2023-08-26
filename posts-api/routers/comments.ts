import express from "express";
import mysqlDb from "../mysqlDb";
import {OkPacketParams} from "mysql2";


const commentsRouter = express.Router();

commentsRouter.get('/', async (req, res) => {
    try{
        const connection =  mysqlDb.getConnection();
        if(req.query.news_id){
            const result = await connection.query
            ('SELECT * FROM comments WHERE news_id = ?', [req.query.news_id]);
            const commentsList = result[0] as Comment[];
            if(commentsList.length === 0){
                res.send({message:"К данному посту нет комментариев! Будьте первым!"});
            }
            res.send(commentsList);
        }else{
            res.send({message: "Данного поста не существует!"});
        }

    }catch (e) {
        res.status(400).send({message: 'Что-то пошло не так!'});
    }

});

commentsRouter.post('/', async  (req, res) => {
    if (!req.body.news_id || !req.body.text ) {
        return res.status(400).send({error: 'Заполните поля!'});
    }
    try{
        const connection =  mysqlDb.getConnection();
        const check = await connection.query
        ('SELECT * FROM news WHERE id = ?', [req.body.news_id]);
        if(check[0]){
            res.send(404).send({error: 'Новость не найдена!'})
        }
        const result = await connection.query(
            'INSERT INTO comments (author, text, news_id) VALUES (?, ?, ?)',
            [req.body.author, req.body.message, req.body.news_id]
        );
        const comment = result[0] as OkPacketParams;
        res.send({
            ...comment,
            id: comment.insertId
        });
    }catch (e) {
        res.status(500).send({message: 'Что-то пошло не так!'});
    }

});
commentsRouter.delete('/:id', async (req, res) => {
    const connection =  mysqlDb.getConnection();
    try {
        await connection.query(
            'DELETE FROM ?? WHERE id = ?',
            [req.params.id]
        );
        res.send(`News comments if = ${req.params.id}  was deleted!` );
    }catch (e) {
        res.status(400).send('Restrict delete!')
    }

});

export default commentsRouter;