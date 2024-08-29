import express, { urlencoded } from "express";
import dotenv from "dotenv";
import http from "http";
import userRoute from "./routes/user.route";
import blogRoute from "./routes/blog.route";
import commentRoute from "./routes/comment.route";
import announcementRoute from "./routes/announcement.route";
import chatRoute from "./routes/chat.route";
dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use("/", userRoute);
app.use("/blog", blogRoute);
app.use("/comment", commentRoute);
app.use("/announcement", announcementRoute);
app.use("/chat", chatRoute);
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Server Is Running at http://localhost:${PORT}`);
});
