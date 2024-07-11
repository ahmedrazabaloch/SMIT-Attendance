import mongoose from "mongoose";
const { Schema } = mongoose;

const studentSchema = new Schema({
  name: String,
  email: String,
  courses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
  trainer_name: {
    type: String,
    required: true,
  },
  trainer_id: {
    type: String,
    required: true,
  },
  phone_number: {
    type: Number,
    required: true,
  },
  cnic_number: {
    type: String,
    required: true,
    unique: true,
  },
  campus_id: {
    type: String,
    required: true,
  },
  batch_id: {
    type: String,
    required: true,
  },
  monthly_fee: {
    type: Number,
    required: true,
  },
  fee_status: {
    type: String,
    required: true,
  },
  roll_no: {
    type: Number,
    require: true,
    unique: true,
  },
});

// Check if the model already exists to prevent redefinition
const Student =
  mongoose.models.Student || mongoose.model("Student", studentSchema);

export default Student;
