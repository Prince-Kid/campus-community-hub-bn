import { Request, Response } from "express";
import User from "../database/models/user";
import Blog from "../database/models/blog";
import StudentLeaderProfile from "../database/models/studentleaderprofile";
import SchoolLeaderProfile from "../database/models/schoolleaderprofile";

export const createBlog = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;
    const { content, blogTitle, cover } = req.body;

    const existingUser = await User.findOne({ where: { userId } });

    if (!userId) {
      return res.status(400).json({ message: "Author ID is required" });
    }
    if (!content || !blogTitle || !cover) {
      return res
        .status(400)
        .json({ message: "Content, blogTitle and cover are required" });
    }
    if (!existingUser) {
      return res.status(400).json({ message: "Oooops User Not Found" });
    }
    const newBlog = await Blog.create({
      authorId: userId,
      blogTitle,
      content,
      cover,
    });
    return res
      .status(201)
      .json({ message: "New Blog Created Successfully", newBlog });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

export const getBlog = async (req: Request, res: Response) => {
  try {
    const blogId = req.params.id;

    const blog = await Blog.findOne({
      where: { blogId },
      include: [
        {
          model: User,
          attributes: ["firstname", "lastname", "profilePicture", "role"],
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

    if (!blog) {
      return res.status(400).json({ message: "No Blog Found" });
    }
    return res.status(200).json({ message: "Blog Found", blog });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

export const allBlog = async (req: Request, res: Response) => {
  try {
    const blogs = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: ["firstname", "lastname", "profilePicture", "role"],
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
    if (!blogs) {
      return res.status(400).json({ message: "No Blog Found" });
    }
    return res.status(200).json({ message: "All Blogs", blogs });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Errro", error });
  }
};

export const updateBlog = async (req: Request, res: Response) => {
  try {
    const blogId = req.params.id;
    const updatedData = req.body;
    const userId = (req as any).user.userId;
    const userRole = (req as any).user.role;

    const existBlog = await Blog.findOne({ where: { blogId } });
    if (!existBlog) {
      return res.status(400).json({ message: "No Blog Found" });
    }
    if (userRole !== "admin" && existBlog.authorId !== userId) {
      return res.status(403).json({
        message:
          "Unauthorized: You can only update your own blogs or if you're an admin",
      });
    }
    if (!updatedData) {
      return res.status(400).json({ message: "Please fill all fields" });
    }
    const updatedBlog = await Blog.update(updatedData, {
      where: { blogId },
    });
    return res.status(200).json({ message: "Blog Updated", updatedBlog });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Errro", error });
  }
};

export const deleteBlog = async (req: Request, res: Response) => {
  try {
    const blogId = req.params.id;
    const userId = (req as any).user.userId;
    const userRole = (req as any).user.role;
    const existBlog = await Blog.findOne({ where: { blogId } });
    if (!existBlog) {
      return res.status(400).json({ message: "No Blog Found" });
    }
    if (userRole !== "admin" && existBlog.authorId !== userId) {
      return res.status(403).json({
        message:
          "Unauthorized: You can only Delete your own blogs or if you're an admin",
      });
    }
    await Blog.destroy({ where: { blogId } });
    return res.status(200).json({ message: "Blog Deleted" });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Errro", error });
  }
};
