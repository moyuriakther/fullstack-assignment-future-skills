/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import notFound from './middleware/notFound';
import router from './routes';
// import globalErrorHandler from './app/middleware/GlobalErrorHandler';

const app: Application = express();

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ credentials: true, origin: '*' }));
app.get('/', (req: Request, res: Response) => {
  res.send('hello world');
});

//application routes
app.use('/', router);

//global Error Handler
// app.use(globalErrorHandler);

// not found
app.use(notFound);

export default app;
