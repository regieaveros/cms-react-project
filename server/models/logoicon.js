import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: { type: String },
    tagline: { type: String },
    image: { type: String },
    icon: { type: String },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    updatedAt: {
        type: Date,
        default: new Date(),
    },
})

export default mongoose.model("LogoIcon", userSchema);