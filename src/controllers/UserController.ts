import { Request, Response } from "express";
import User from "../models/usersSchemas";
import IUser from "../types/UserTypes";

class UserController {
  async find(req: Request, res: Response) {
    try {
      const users = await User.find();

      return res.status(200).json(users);
    } catch (error) {
      res.status(500).send({
        error: "Get failed",
        message: error,
      });
    }
  }

  async create(req: Request<any, any, Required<IUser>>, res: Response) {
    const { name, email, password } = req.body;
    try {
      const userExists = await User.findOne({ email });

      if (userExists) {
        return res
          .status(400)
          .json({ error: "User exist", message: "User already exists" });
      }

      const user = await User.create({
        name,
        email,
        password,
      });

      return res.json(user);
    } catch (error) {
      res.status(500).send({
        error: "Registration failed",
        message: error,
      });
    }
  }
}
export default new UserController();
