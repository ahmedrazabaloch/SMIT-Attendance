import Teacher from './teacherModel.js';

// Get all teachers
export const getAllTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new teacher
export const createTeacher = async (req, res) => {
  const teacher = new Teacher({
    name: req.body.name,
    email: req.body.email,
    courses: req.body.courses,
    batches: req.body.batches
  });

  try {
    const newTeacher = await teacher.save();
    res.status(201).json(newTeacher);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
