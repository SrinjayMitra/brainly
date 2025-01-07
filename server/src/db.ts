
import mongoose,{model,Schema } from "mongoose";
import { uri } from "./config";
import { v4 as uuidv4 } from "uuid";

enum ContentType {
  DOCUMENT = "document",
  TWEET = "tweet",
  YOUTUBE = "youtube",
  LINK = "link"
}

mongoose.connect(uri);
let token = String(uuidv4());
const MySchema = new Schema({
    userName: {type:String, unique:true},
    password: { type: String, required: true },
    shareToken: { type: String, unique: true, default: token }
})

const contentSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: false},
    type: { type: String, enum: Object.values(ContentType)},
    link:  { type: String, required: true },
    addedDate:{ type: String, required: true},
    tags: [{ type: String}], // Correct ref placement
    userId: { type: mongoose.Types.ObjectId, ref: 'Users', required: true }, // Correct ref placement
  });

const shareSchema = new Schema({
  link: { type:String, required: true},
  contentId: { type: mongoose.Types.ObjectId, ref: 'Content', required: true },
  userId: { type: mongoose.Types.ObjectId, ref: 'Users', required: true }

}); 




export const contentModel =model("Content",contentSchema)
export const userModel = model("Users",MySchema);
export const shareModel = model("shareLinks", shareSchema)

