import { NextFunction,Request,Response } from "express";
import jwt,{ decode, JsonWebTokenError} from "jsonwebtoken";
import { SECRET_KEY } from "./config";
import { userModel } from "./db";

export const checkUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const header = req.headers["authorization"];
  
    if (!header) {
      res.status(403).send({ error: "Authorization header is missing" });
      return;
    }
  
    try {
      const decoded = jwt.verify(header as string, SECRET_KEY);
      console.log(decoded);
      //@ts-ignore
      const userName = decoded.userName;  
      if (decoded) {
        //@ts-ignore
        const user = await userModel.findOne({ userName });

    if (!user) {
      res.status(404).send({ error: "User not found" });
    }

    //@ts-ignore
    req.userId = user._id; 
    //@ts-ignore
    console.log("User ObjectId:", req.userId);
        next();       } else {
        res.status(403).send({ error: "Not logged in" });
      }
    } catch (err) {
      res.status(403).send({ error: "Invalid or expired token" });
    }
  };