import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, required: true, unique: true },
    password: String,
    role: { type: String, enum: ['admin', 'teacher', 'student'], default: 'student' },

    // 🔐 Lockout fields
    loginAttempts: { type: Number, default: 0 },
    lockUntil: { type: Date }
});

// 🔐 Virtual field to check if user is currently locked
userSchema.virtual('isLocked').get(function () {
    return !!(this.lockUntil && this.lockUntil > Date.now());
});

export default mongoose.model('User', userSchema);
