import { Request, Response } from "express";
import User from "../database/models/user";

import SchoolLeaderProfile from "../database/models/schoolleaderprofile";

export const schoolLeaderProfile = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const { position, bio } = req.body;
    const user = await User.findOne({ where: { userId: userId } });

    if (!user) {
      return res.status(401).json({ message: "Ooooops User Not Found" });
    }
    if (user.role !== "school_leader") {
      return res.status(400).json({
        message: "Oooooops You are not allowed To Perfom This action",
      });
    }
    if (!position || !bio) {
      return res.status(401).json({ message: "Please Fill all Fields" });
    }

    const schoolLeader = await SchoolLeaderProfile.create({
      schoolLeaderId: userId,
      position,
      bio,
    });
    res.status(200).json({
      message: "Scool Leader Profile Created Successfully",
      schoolLeader,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};
