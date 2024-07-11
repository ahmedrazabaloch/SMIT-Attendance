import mongoose from "mongoose";
const { Schema } = mongoose;

const teacherSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  courses: [
    {
      type: String,
      required: true,
      trim: true,
    },
  ],
  batches: [
    {
      type: Schema.Types.ObjectId,
      ref: "Batch",
      required: true,
    },
  ],
  classes_taught: {
    type: Number,
    default: 0,
  },
  campus_id: [
    {
      type: Schema.Types.ObjectId,
      ref: "Campus",
      required: true,
    },
  ],
  class_days: [
    {
      type: String,
      enum: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      required: true,
    },
  ],
});

const Teacher =
  mongoose.models.Teacher || mongoose.model("Teacher", teacherSchema);
export default Teacher;
