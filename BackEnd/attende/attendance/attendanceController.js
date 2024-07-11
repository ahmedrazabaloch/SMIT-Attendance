import Attendance from './attendanceModel.js';

export const getAllAttendances = async (req, res) => {
  try {
    const attendances = await Attendance.find();
    res.json(attendances);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new attendance record
export const createAttendance = async (req, res) => {
  const attendance = new Attendance({
    student: req.body.student,
    batch: req.body.batch,
    date: req.body.date,
    status: req.body.status
  });

  try {
    const newAttendance = await attendance.save();
    res.status(201).json(newAttendance);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
