import { Request, Response } from "express";
import User from "../database/models/user";

import StudentLeaderProfile from "../database/models/studentleaderprofile";

export const studentLeaderProfile = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const { position, bio } = req.body;
    const user = await User.findOne({ where: { userId: userId } });

    if (!user) {
      return res.status(401).json({ message: "Oooops User Not Found" });
    }
    if (user.role !== "student_leader") {
      return res
        .status(401)
        .json({ message: "Oooops You're not allowed to perforn This Action" });
    }
    if (!position || !bio) {
      return res.status(401).json({ message: "Pleasee Fill All Field" });
    }

    const studentLeader = await StudentLeaderProfile.create({
      studentLeaderId: userId,
      position,
      bio,
    });

    res
      .status(200)
      .json({ message: "Student Leader Created Successfully ", studentLeader });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error ", error });
  }
};
