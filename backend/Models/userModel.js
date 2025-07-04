import mongoose from 'mongoose';

const registerSchema = new mongoose.Schema(
  {
    id:{
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        unique: true,
      
    },
    name: {
      type: String,
      required: true,
    },
    birth: {
      type: Date,
      required: true,
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'others'],
      required: true,
    },
    address: {
      type: String,
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['student', 'teacher', 'admin'],
      default: 'student',
    },
    education: {
      type: String,
      enum: ['slc', 'plus2', 'bachelor', 'master'],
    },
    program: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Register = mongoose.model('Register', registerSchema);

export default Register;
