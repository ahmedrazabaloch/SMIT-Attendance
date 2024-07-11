import mongoose from 'mongoose';
const { Schema } = mongoose;

const attendanceSchema = new Schema({
  student: { type: Schema.Types.ObjectId, ref: 'Student' },
  batch: { type: Schema.Types.ObjectId, ref: 'Batch' },
  date: Date,
  status: String,
});

// Check if the model already exists to prevent redefinition
const Attendance = mongoose.models.Attendance || mongoose.model('Attendance', attendanceSchema);

export default Attendance;
