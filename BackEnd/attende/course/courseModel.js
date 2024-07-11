import mongoose from "mongoose";
const { Schema } = mongoose;

const courseSchema = new Schema({
  name: String,
  description: String,
  teachers: [{ type: Schema.Types.ObjectId, ref: 'Teacher' }],
  students: [{ type: Schema.Types.ObjectId, ref: 'Student' }],
});

// Check if the model already exists to prevent redefinition
const Course = mongoose.models.Course || mongoose.model('Course', courseSchema);
export default Course;
