import * as http from 'http';
import express, { NextFunction, Request, Response } from 'express';
import 'dotenv/config';
import 'express-async-errors';
import cors from 'cors';

import { router } from './routes/StudentRoutes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.use(
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	(err: Error, request: Request, response: Response, next: NextFunction) => {
		if (err instanceof Error) {
			return response.status(400).json({
				error: err.message,
			});
		}

		return response.status(500).json({
			status: 'error',
			message: 'Internal Server Error',
		});
	},
);

const server = http.createServer(app);

export { server };
