import express, { Application, Request, Response } from 'express';
import routes from 'routes/index';

export default function createServer() {
    const app: Application = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.get('/', (req: Request, res: Response) => {
        res.send("Hello world");
    });

    app.use(routes);

    return app;
}