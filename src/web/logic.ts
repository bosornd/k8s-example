import express, {Request, Response} from 'express';
const router = express.Router();

import {Container} from 'typedi';
import {ICountDB} from '../data/ICountDB'

const db: ICountDB = Container.get('CountDB');

router.get('/', async (req: Request, res: Response) => {
    const count = await db.get();
    res.send(count.toString());
});

module.exports = router