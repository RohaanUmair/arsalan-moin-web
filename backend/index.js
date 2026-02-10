import cookieParser from 'cookie-parser';
import express from "express"
import cors from 'cors';
import connectDB from "./db/index.js"
import dotenv from "dotenv"
import paddleRoutes from "./routes/paddle.routes.js"
import authRoutes from "./routes/auth.routes.js"
import downloadRoutes from "./routes/download.routes.js"
dotenv.config()



const app = express()
const port = process.env.PORT || 4000

const allowedOrigins = [
  process.env.LOCAL_BASE_URL,
  process.env.BASE_URL
];




app.get("/", (req, res) => {
  res.send("API is running...");
});

// CORS must be before routes
app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));

// Middleware to capture raw body for signature verification
app.use(express.json({
  verify: (req, res, buf) => {
    if (req.originalUrl.startsWith('/paddle/webhooks')) {
      req.rawBody = buf;
    }
  }
}));

app.use(cookieParser());

// Routes
app.use('/paddle', paddleRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/downloads', downloadRoutes);




connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`⚙️  Server is running at port : ${port}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB connection failed !!! ", err);
  });