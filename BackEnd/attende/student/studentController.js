import Student from './studentModel.js';

// Get all students
 const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new student
 const createStudent = async (req, res) => {
  const student = new Student({
    name: req.body.name,
    email: req.body.email,
    courses: req.body.courses
  });

  try {
    const newStudent = await student.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export {getAllStudents ,createStudent }