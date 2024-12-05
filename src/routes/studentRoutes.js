import express from "express";
import {
  createStudent,
  deleteStudent,
  getAllStudents,
  getApprovedStudents,
  getAverages,
  getStudentById,
  updateStudent,
} from "../controllers/studentController.js";

const router = express.Router();

router.get("/", getAllStudents);
router.get("/aprovados", getApprovedStudents);
router.get("/medias", getAverages);
router.get("/:id", getStudentById);
router.post("/", createStudent);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);

export default router;
