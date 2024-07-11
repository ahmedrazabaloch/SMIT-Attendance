import mongoose from 'mongoose';
const { Schema } = mongoose;

const campusSchema = new Schema({
  name: String,
  location: String,
});

const Campus = mongoose.models.Campus || mongoose.model('Campus', campusSchema);

export default Campus;
