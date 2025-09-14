import jwt from "jsonwebtoken";
import JWT_SECRET from "./JWT.js";
const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer')) {
        return res.status(403).json({});
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        if (decoded) {
            //@ts-ignore
            req.userId = decoded.userId;
        }
        else {
            return res.status(403).json({});
        }
        next();
    }
    catch (err) {
        return res.status(403).json({});
    }
};
export default authMiddleware;
//# sourceMappingURL=middleware.js.map