import mongoose from 'mongoose';
const { Schema } = mongoose;

const batchSchema = new Schema({
  name: String,
  course: { type: Schema.Types.ObjectId, ref: 'Course' },
  teacher: { type: Schema.Types.ObjectId, ref: 'Teacher' },
  campus: { type: Schema.Types.ObjectId, ref: 'Campus' },
  schedule: String,
  students: [{ type: Schema.Types.ObjectId, ref: 'Student' }],
});

const Batch = mongoose.models.Batch || mongoose.model('Batch', batchSchema);

export default Batch;
