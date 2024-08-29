import { Request, Response } from "express";
import Announcement from "../database/models/announcement";
import User from "../database/models/user";
import StudentLeaderProfile from "../database/models/studentleaderprofile";

import SchoolLeaderProfile from "../database/models/schoolleaderprofile";

export const announcement = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;
    const { content } = req.body;
    if (!content) {
      return res.status(400).json({ message: "Content is required" });
    }
    const announcement = await Announcement.create({
      authorId: userId,
      content,
    });
    return res.status(201).json(announcement);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getAnnouncement = async (req: Request, res: Response) => {
  try {
    const announcementId = req.params.id;
    const announcement = await Announcement.findOne({
      where: { announcementId },
      include: [
        {
          model: User,
          attributes: ["firtsname", "lastname", "role", "profilePicture"],
          include: [
            {
              model: StudentLeaderProfile,
              attributes: ["position"],
            },
            {
              model: SchoolLeaderProfile,
              attributes: ["position"],
            },
          ],
        },
      ],
    });
    if (!announcement) {
      return res.status(404).json({ message: "Announcement not found" });
    }
    return res.status(200).json(announcement);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const allAnnouncement = async (req: Request, res: Response) => {
  try {
    const announcements = await Announcement.findAll({
      include: [
        {
          model: User,
          attributes: ["firstname", "lastname", "role", "profilePicture"],
          include: [
            {
              model: StudentLeaderProfile,
              attributes: ["position"],
            },
            {
              model: SchoolLeaderProfile,
              attributes: ["position"],
            },
          ],
        },
      ],
    });
    return res.status(200).json(announcements);
  } catch (error) {
    return res.status(500).json(error);
  }
};
