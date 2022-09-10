import { Router, Request, Response, NextFunction } from "express";
import { User } from "../models/User";

const router = Router();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
	try {
		let users: User[] = await User.findAll();
		return res.json(users);
	} catch (e) {
		next(e);
	}
});

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
	try {
		let { name, lastName } = req.body;
		if (!name && !lastName)
			return res.status(400).json({ error: "Name and last name are required" });
		if (!name) return res.status(400).json({ error: "Name is required" });
		if (!lastName)
			return res.status(400).json({ error: "Last name is required" });
		let user = await User.create(req.body);
		if (user) return res.json(user).status(201);
	} catch (e) {
		next(e);
	}
});

export default router;
