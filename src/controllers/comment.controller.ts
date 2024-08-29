import { Request, Response } from "express";
import Blog from "../database/models/blog";
import User from "../database/models/user";
import Comment from "../database/models/comment";

export const comment = async (req: Request, res: Response) => {
  try {
    const user = (req as any).user.id;
    const blogId = req.params.id;
    const { content } = req.body;

    if (!user) {
      return res
        .status(401)
        .json({ message: "You must be logged in to comment" });
    }
    if (!content) {
      return res.status(400).json({ message: "You must provide a comment" });
    }
    const blog = await Blog.findOne({ where: { blogId } });
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    const comment = await Comment.create({
      blogId,
      userId: user,
      content,
    });
    res
      .status(201)
      .json({ message: "Comment Added Successfully !!!", comment });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

export const getComment = async (req: Request, res: Response) => {
  try {
    const blogId = req.params.id;
    const comment = await Comment.findAll({
      where: { blogId },
      include: [
        {
          model: User,
          attributes: ["firstname", "lastname", "profilePicture"],
        },
      ],
    });
    if (!comment || comment.length === 0) {
      return res.status(404).json({ message: "Comment not found" });
    }

    res.status(200).json({ message: "Comments", comment });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};
