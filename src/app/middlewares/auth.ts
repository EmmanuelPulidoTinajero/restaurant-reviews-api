import { Request, Response, NextFunction } from "express"

export function authMiddleware(req: Request, res: Response, next: NextFunction ) {
    const token = req.query.token;
    if (token === "12345") {
        next();
    } else {
        res.status(401).send({ message: "Acceso inválido" });
    }
}