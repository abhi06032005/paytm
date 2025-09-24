import express from "express";
import cors from "cors";
import router from "./routes/index.js";
const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173", // replace with your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // if you need cookies/auth headers
}));
app.use("/api/v1", router);
app.listen(3000);
//# sourceMappingURL=index.js.map