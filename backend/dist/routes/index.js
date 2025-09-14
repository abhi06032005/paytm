import express from "express";
const router = express.Router();
import accountRouter from "./account.js";
import userRouter from "./user.js";
router.use("/user", userRouter);
router.use('/account', accountRouter);
export default router;
//# sourceMappingURL=index.js.map