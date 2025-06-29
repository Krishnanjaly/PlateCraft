const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },        // ✅ Add this
  email: { type: String, required: true },
  phone: { type: String },
  password: { type: String, required: true }
});

module.exports = mongoose.model("User", userSchema);
