import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Student from '../attende/student/studentModel.js';
import Teacher from '../attende/teacher/teacherModel.js';
import Course from '../attende/course/courseModel.js';
import Campus from '../attende/campus/campusModel.js';
import Batch from '../attende/batch/batchModel.js';
import Attendance from '../attende/attendance/attendanceModel.js';
import {students }from '../attendeJson/students.js';
import {teachers }from '../attendeJson/teachers.js';
import {courses} from '../attendeJson/courses.js';
import {campuses} from '../attendeJson/campuses.js';
import {batches} from '../attendeJson/batches.js';
import {attendances} from '../attendeJson/attendances.js';

dotenv.config();

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

async function seedDB() {
  try {
    // Uncomment to delete existing data before seeding
    // await Student.deleteMany({});
    // await Teacher.deleteMany({});
    // await Course.deleteMany({});
    // await Campus.deleteMany({});
    // await Batch.deleteMany({});
    // await Attendance.deleteMany({});

    await Student.insertMany(students);
    await Teacher.insertMany(teachers);
    await Course.insertMany(courses);
    await Campus.insertMany(campuses);
    await Batch.insertMany(batches);
    await Attendance.insertMany(attendances);

    console.log('Data seeded!');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    mongoose.disconnect();
  }
}

seedDB();
