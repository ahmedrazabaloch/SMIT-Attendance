import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from "cors"
// Load environment variables from .env file
dotenv.config();

// Import routers
import {authRouter} from './auth/auth_router/routerAuth.js';
import {todoRouter} from './todos/todosRouter/todo.js';
import {imageUploadRouter} from './imageUpload/upload.image.route.js';
import studentRoutes from './attende/student/studentRoutes.js';
import teacherRoutes from './attende/teacher/teacherRoutes.js';
import courseRoutes from './attende/course/courseRoutes.js';
import campusRoutes from './attende/campus/campusRoutes.js';
import batchRoutes from './attende/batch/batchRoutes.js';
import attendanceRoutes from './attende/attendance/attendanceRoutes.js';

const app = express();
app.use(cors())
// Connect to MongoDB
mongoose.connect(process.env.DBURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
  console.log('MongoDB connected');
});
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/auth', authRouter);
app.use('/todo', todoRouter);
app.use('/api', imageUploadRouter);
app.use('/students', studentRoutes);
app.use('/teachers', teacherRoutes);
app.use('/courses', courseRoutes);
app.use('/campuses', campusRoutes);
app.use('/batches', batchRoutes);
app.use('/attendances', attendanceRoutes);

// Error handling middleware (example)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start server
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
