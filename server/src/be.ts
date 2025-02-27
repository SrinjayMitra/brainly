import  express  from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { contentModel, shareModel,  userModel } from "./db";
import { SECRET_KEY } from "./config";
import { checkUser } from "./middlewares";
import axios from "axios";
import { shortenLink } from "./helpers";
import { verifyPassword } from "./helpers";
import { Request,Response } from "express";
import cors from 'cors';
import { ServerDescription } from "mongodb";
import { URL,GEMINI_API_KEY } from "./config";
const BACKENDURL = URL;


const app = express();
app.use(express.json())
app.use(cors());


 
 // Replace with a strong secret key

// User Sign-Up
app.post("/api/v1/signup", async (req, res) => {
  try {
    const { userName, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user to database
    await userModel.create({
      userName: userName,
      password: hashedPassword,
    });


    res.status(201).send({ message: "User signed up successfully" });
  } catch (error) {
    res.status(411).send({ error: "User Already exists" });
  }
});





// User Sign-In
// app.post("/api/v1/signin", async (req,res) => {
//     try {
//       const { userName, password } = req.body;

//       // Find user in the database
//       const user = await userModel.findOne({ userName });
//       let userPass = user?.password;
//       if(userPass == null){
//         userPass = "";
//       }
  
//       if (user == null) {
//         res.status(404).send({ error: "User not found" });
//       }
//       else { 
//       // Compare passwords
//       const isPasswordValid = await verifyPassword(password,userPass);
  
//       if (!isPasswordValid) {
//          res.status(401).send({ error: "Invalid credentials" });
//       }
  
//       // Generate JWT token
//       const token = jwt.sign({ userName: user.userName }, SECRET_KEY);
//       const shareLink = user.shareToken;
//       res.status(200).send({ message: "User signed in successfully", token, shareLink });
//     } 
// }
// catch (error) {
//       res.status(500).send({ error: "Error signing in user" });
//     }
//   });


  app.post("/api/v1/signin", async (req, res) => {
    try {
      const { userName, password } = req.body;
  
      // Find user in the database
      const user = await userModel.findOne({ userName });
  
      if (user == null) {
        // Send response for user not found
        res.status(404).send({ error: "User not found" });
      } else {
        // If user found, proceed to compare passwords
        const userPass = user.password || "";  // Default to empty string if password is undefined or null
  
        // Compare passwords
        const isPasswordValid = await verifyPassword(password, userPass);
  
        if (!isPasswordValid) {
          // Send response for invalid credentials
          res.status(401).send({ error: "Invalid credentials" });
        } else {
          // Generate JWT token
          const token = jwt.sign({ userName: user.userName }, SECRET_KEY);
          const shareLink = user.shareToken;
          // Send success response
          res.status(200).send({ message: "User signed in successfully", token, shareLink });
        }
      }
    } catch (error) {
      console.error("Error:", error); // Log the error for debugging
      // Send response for general server error
      res.status(500).send({ error: "Error signing in user" });
    }
  });
  



app.post("/api/v1/content", checkUser, async (req, res) => {
    try {
      let { title, link, type , description,tags } = req.body;
      const currentDate = new Date();
      const usDate = currentDate.toLocaleDateString('en-US');
      // const formattedDate = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
      // Validate input
      if (!title || !link) {
         res.status(400).json({ error: "Title and link are required" });
      }
      
      title = String(title);
      link = String(link);
      description=String(description);
      const date= String(usDate);
      if (typeof tags === 'string') {
        try {
          tags = JSON.parse(tags);  // If tags come as a stringified array
        } catch (error) {
          tags = tags.split(',');   // Fallback to comma-separated string parsing
        }
      }

      // Create content
    await contentModel.create({
        title: title,
        description:description,
        type: type,
        link: link,
        addedDate: date,
        tags: tags,
        //@ts-ignore
        userId: req.userId
      });
  
       res.status(201).json({ message: "Content added successfully" });
    } catch (error) {
      console.error("Error adding content:", error);
       res.status(500).json({ error: "Error adding content" });
    }
  });

app.get("/api/v1/content",checkUser, async (req,res) =>{
 //@ts-ignore
 const userId = req.userId;
 const result = await contentModel.find({
    userId: userId }).populate("userId");
    res.json({
        result
    });
});



app.delete("/api/v1/content",checkUser, async (req,res) =>{
    try {
        //@ts-ignore
        const userId = req.userId; // The user ID from the JWT token
        const contentId = req.body.contentId; // The ID of the content to delete
    
        // Ensure contentId and userId are provided
        if (!contentId) {
          res.status(400).send({ error: "Content ID is required" });
        }
    
        const result = await contentModel.deleteMany({
          _id: contentId,
          userId: userId,
        });
    
        if (result.deletedCount === 0) {
           res.status(404).send({ error: "Content not found or already deleted" });
        }
    
        const remainingContent = await contentModel
          .find({ userId: userId })
          .populate("userId"); 
    
        res.json({
          message: "Content deleted successfully",
          remainingContent,
        });
      } catch (error) {
        console.error("Error deleting content:", error);
        res.status(500).send({ error: "Error deleting content" });
      }
    });

 /// shareModal API
   app.get("/api/v1/getShareLink", checkUser , async (req,res) => {
      //@ts-ignore
      const userId = req.userId;
      const result = await userModel.findOne({
    _id: userId });
    res.json({
        result
    });
   });

/// card share icon api
    app.post("/api/v1/brain/shareLink",checkUser, async (req,res) =>{
        try {
            //@ts-ignore
            const userId = req.userId;
            const contentId = req.body.contentId;

            const existingShare = await shareModel.findOne({ contentId: contentId });

        if (existingShare) {
             res.status(200).send({ shortURL: existingShare.link });
        }

        else{
            const axiosResponse = await axios.get(`${BACKENDURL}/content`, {
            headers: {
                Authorization: req.headers["authorization"], 
            },
        });

        const allContent = axiosResponse.data.result;
        
        const filteredContent = allContent.filter((content: any) => content._id === contentId);

        const link = filteredContent.map((content: any) => content.link);

        const longLink = link[0];

        const shortURL = await shortenLink(longLink);

        await shareModel.create({
          link: shortURL,
          contentId: contentId,
          userId: userId
        });
        
        console.log(shortURL);
        res.send({
          shortURL
        });
        }  
    } catch (error) {
        //@ts-ignore
        console.error("Error sharing content:", error.message); 
        res.status(500).send({ error: "Error sharing content" });
    }
});

app.get("/api/v1/brain/:shareToken", async (req,res)   => {
  try {
    const  shareToken  = req.params.shareToken;

    // Find the user by their shareToken
    // let user;
    // try {
     const user = await userModel.findOne({ shareToken });
    // } catch (error) {
      //@ts-ignore
      // console.error("Error fetching shared links:", error.message);
    // return res.status(500).json({ error: "Internal server error" });
    // }
    

    if (user == null) {
      res.status(404).json({ error: "User not found" });
    }else{
      //******************************************
      //  try to make all the links using tiny url
      //  const links = await shareModel.find({ userId: user._id }).populate("contentId");
      // *****************************************
    // Find all links associated with the user's ID
    //@ts-ignore
    const links = await contentModel.find({ userId: user._id });

     res.status(200).json({
      //@ts-ignore
      userId: user._id,
      links,
    });
  }
  } catch (error) {
    //@ts-ignore
    console.error("Error fetching shared links:", error.message);
     res.status(500).json({ error: "Internal server error" });
  }
});     


app.get("/api/v1/chat", async (req, res) => {
  const message = req.query.message as string;
  const prePrompts = [
    { text: "You are an AI assistant that manages and provides information about various content, including videos, tweets, links, and general topics. Be precise and concise in your responses. but also give a litlle extra info" },
    { text: "For videos, provide a brief summary or relevant details." },
    { text: "For tweets, include the tweet content, author, and relevant hashtags." },
    { text: "give to the point answers that are just straight forward and also hallucinate a bit for the questions that require creative answers but remember to answer the question every time in detail" },
    { text: "For links, give a short description of the content they lead to." },
    { text: "For other topics, provide a  overview (under 60 words)." },
    { text: "Ensure responses are clear, accurate, and to the point." },
    { text: "Strictly only Respond only in plain text, without any formatting such as bold, italics, or markdown." },
    {
      text: `You are strictly not allowed to using any special characters in your answers, including but not limited to:
    - ** (asterisks)
    - _ (underscores)
    - # (hash/pound)
    - * (asterisks)
    - ~ (tilde)
    - \` (backticks)
    - [] (square brackets)
    - {} (curly braces)
    - () (parentheses)
    - < > (angle brackets)
    - ! (exclamation mark)
    - @ (at symbol)
    - $ (dollar sign)
    - % (percent)
    - ^ (caret)
    - & (ampersand)
    - = (equals sign)
    - + (plus sign)
    - | (pipe)
    - ; (semicolon)
    - : (colon)
    - ' (single quotes)
    - " (double quotes)
    - / (forward slash)
    - \\ (backslash)
    - , (comma)
    - . (period)
    - ? (question mark)
    - ~ (tilde)
    - '\n' (new line)`
    }
    
    
  ];
  try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
        {
            contents: [
                {
                    parts: [
                        ...prePrompts,
                        { text: `the User sent ${message}. Now reply to it` } // Use the incoming message here
                    ]
                }
            ]
        },
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );

      let final = response.data?.candidates?.[0]?.content?.parts?.[0]?.text;
      final = final.replace("\n","");

      res.status(200).json({
        
          mssg:final
      });
  } catch (error) {
      console.error(error);
     
  }
});

      
app.listen(3000);
console.log("backend Rnning");
