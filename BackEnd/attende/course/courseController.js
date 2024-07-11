import Course from './courseModel.js';

// Get all courses
const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new course
const createCourse = async (req, res) => {
  const course = new Course({
    name: req.body.name,
    description: req.body.description,
    teachers: req.body.teachers,
    students: req.body.students
  });

  try {
    const newCourse = await course.save();
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export { createCourse , getAllCourses}
