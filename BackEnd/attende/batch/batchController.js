import Batch from './batchModel.js';

// Get all batches
export const getAllBatches = async (req, res) => {
  try {
    const batches = await Batch.find();
    res.json(batches);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new batch
export const createBatch = async (req, res) => {
  const batch = new Batch({
    name: req.body.name,
    course: req.body.course,
    teacher: req.body.teacher,
    campus: req.body.campus,
    schedule: req.body.schedule,
    students: req.body.students
  });

  try {
    const newBatch = await batch.save();
    res.status(201).json(newBatch);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
