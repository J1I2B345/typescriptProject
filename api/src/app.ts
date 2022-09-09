import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Application, Request, Response, NextFunction } from "express";
import morgan from "morgan";
import config from "../lib/config";
import router from "./routes";

const app: Application = express();

//parsea el url
app.use(express.urlencoded({ extended: true, limit: "50mb" })); //middleware
//parsea el body a JSON
app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(morgan("dev"));

app.use(
	cors({
		origin: config.cors,
		credentials: true,
		methods: ["GET", "PUT", "OPTIONS", "POST", "DELETE"],
		allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
	})
);

app.use("/api", router);

interface error {
	status: number;
	message: string;
}
app.use((err: error, req: Request, res: Response, next: NextFunction) => {
	const status = err.status || 500;
	const message = err.message || err;
	console.error(err);
	res.status(status).send(message);
});

export default app;
