import Campus from './campusModel.js';

// Get all campuses
export const getAllCampuses = async (req, res) => {
  try {
    const campuses = await Campus.find();
    res.json(campuses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new campus
export const createCampus = async (req, res) => {
  const campus = new Campus({
    name: req.body.name,
    location: req.body.location
  });

  try {
    const newCampus = await campus.save();
    res.status(201).json(newCampus);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
