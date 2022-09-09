import dotenv from "dotenv";
dotenv.config();

const config = {
	dbUser: process.env.DB_USER || "postgres",
	dbPassword: process.env.DB_PASSWORD || "1234",
	dbHost: process.env.DB_HOST || "localhost",
	dbName: process.env.DB_NAME || "workshop",
	dbPort: process.env.DB_PORT || "5432",
	port: process.env.PORT || 3001,
	host: process.env.HOST || "localhost",
	cors: process.env.CORS || "localhost:3000",
};

export default config;
