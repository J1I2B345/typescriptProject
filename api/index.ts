import app from "./src/app";
import config from "./lib/config";
import { sequelize } from "./src/db";

sequelize
	.sync({ force: true, logging: false })
	.then(() => {
		app.listen(config.port, () => {
			console.log("listening on port " + config.port);
		});
	})
	.catch((err) => console.error(err.message));
