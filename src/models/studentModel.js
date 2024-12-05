import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true, unique: true },
    nome: { type: String, required: true },
    ra: { type: String, required: true, unique: true },
    nota1: { type: Number, required: true },
    nota2: { type: Number, required: true },
  },
  { versionKey: false }
);

const Student = mongoose.model("Student", studentSchema);
export default Student;
