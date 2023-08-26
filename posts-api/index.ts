import express from 'express';
import cors from 'cors';
import mysqlDb from "./mysqlDb";
import newsRouter from "./routers/news";

const app = express();
const port = 8000;


app.use(express.json());
app.use(express.static('public'));
app.use(cors());
app.use('/news', newsRouter);

const run =async () => {
    await mysqlDb.init();
    app.listen(port, () => {
        console.log(`Server work on ${port} port !`);
    });
};

run().catch(console.error);
