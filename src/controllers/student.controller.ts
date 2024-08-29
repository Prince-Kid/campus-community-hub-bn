import { Request, Response } from "express";
import User from "../database/models/user";
import StudentProfile from "../database/models/studentprofile";

export const studentProfile = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const { rollNumber, major, department, class: cls } = req.body;

    const student = await User.findOne({ where: { userId: userId } });
    if (!student) {
      return res.status(404).json({ message: "User not found" });
    }
    if (!rollNumber || !major || !department) {
      return res.status(400).json({ message: "Please fill all Fields" });
    }
    if (student.role !== "student" && student.role !== "admin") {
      return res
        .status(403)
        .json({ message: "You are not allowed to Perfom This Action" });
    }
    const studentProfile = await StudentProfile.create({
      studentId: userId,
      rollNumber,
      major,
      department,
      class: cls,
    });
    res.status(201).json({
      message: "Student profile created successfully",
      studentProfile,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

export const updateStudentProfile = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.userId;
    const { rollNumber, major, department, class: cls } = req.body;
    const studentProfile = await StudentProfile.findOne({
      where: { studentId: userId },
    });
    if (!studentProfile) {
      return res.status(404).json({ message: "Student Profile not found" });
    }
    if (!rollNumber || !major || !department) {
      return res.status(401).json({ message: "Please Fill all Fields" });
    }
    await StudentProfile.update(
      { rollNumber, major, department, class: cls },
      { where: { studentId: userId } }
    );
    res.status(200).json({ message: "Student Profile updated successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

export const deleteStudentProfile = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.userId;
    const existingUser = await User.findOne({ where: { userId } });

    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }
    const studentProfile = await StudentProfile.findOne({
      where: { studentId: userId },
    });
    if (!studentProfile) {
      return res.status(404).json({ message: "Student Profile not found" });
    }
    await StudentProfile.destroy({ where: { studentId: userId } });
    res.status(200).json({ message: "Student Profile deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};
