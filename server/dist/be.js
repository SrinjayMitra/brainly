"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const db_1 = require("./db");
const config_1 = require("./config");
const middlewares_1 = require("./middlewares");
const axios_1 = __importDefault(require("axios"));
const helpers_1 = require("./helpers");
const helpers_2 = require("./helpers");
const cors_1 = __importDefault(require("cors"));
const config_2 = require("./config");
const BACKENDURL = config_2.URL;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Replace with a strong secret key
// User Sign-Up
app.post("/api/v1/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userName, password } = req.body;
        // Hash the password
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        // Save user to database
        yield db_1.userModel.create({
            userName: userName,
            password: hashedPassword,
        });
        res.status(201).send({ message: "User signed up successfully" });
    }
    catch (error) {
        res.status(411).send({ error: "User Already exists" });
    }
}));
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
app.post("/api/v1/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userName, password } = req.body;
        // Find user in the database
        const user = yield db_1.userModel.findOne({ userName });
        if (user == null) {
            // Send response for user not found
            res.status(404).send({ error: "User not found" });
        }
        else {
            // If user found, proceed to compare passwords
            const userPass = user.password || ""; // Default to empty string if password is undefined or null
            // Compare passwords
            const isPasswordValid = yield (0, helpers_2.verifyPassword)(password, userPass);
            if (!isPasswordValid) {
                // Send response for invalid credentials
                res.status(401).send({ error: "Invalid credentials" });
            }
            else {
                // Generate JWT token
                const token = jsonwebtoken_1.default.sign({ userName: user.userName }, config_1.SECRET_KEY);
                const shareLink = user.shareToken;
                // Send success response
                res.status(200).send({ message: "User signed in successfully", token, shareLink });
            }
        }
    }
    catch (error) {
        console.error("Error:", error); // Log the error for debugging
        // Send response for general server error
        res.status(500).send({ error: "Error signing in user" });
    }
}));
app.post("/api/v1/content", middlewares_1.checkUser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { title, link, type, description, tags } = req.body;
        const currentDate = new Date();
        const usDate = currentDate.toLocaleDateString('en-US');
        // const formattedDate = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
        // Validate input
        if (!title || !link) {
            res.status(400).json({ error: "Title and link are required" });
        }
        title = String(title);
        link = String(link);
        description = String(description);
        const date = String(usDate);
        if (typeof tags === 'string') {
            try {
                tags = JSON.parse(tags); // If tags come as a stringified array
            }
            catch (error) {
                tags = tags.split(','); // Fallback to comma-separated string parsing
            }
        }
        // Create content
        yield db_1.contentModel.create({
            title: title,
            description: description,
            type: type,
            link: link,
            addedDate: date,
            tags: tags,
            //@ts-ignore
            userId: req.userId
        });
        res.status(201).json({ message: "Content added successfully" });
    }
    catch (error) {
        console.error("Error adding content:", error);
        res.status(500).json({ error: "Error adding content" });
    }
}));
app.get("/api/v1/content", middlewares_1.checkUser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //@ts-ignore
    const userId = req.userId;
    const result = yield db_1.contentModel.find({
        userId: userId
    }).populate("userId");
    res.json({
        result
    });
}));
app.delete("/api/v1/content", middlewares_1.checkUser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //@ts-ignore
        const userId = req.userId; // The user ID from the JWT token
        const contentId = req.body.contentId; // The ID of the content to delete
        // Ensure contentId and userId are provided
        if (!contentId) {
            res.status(400).send({ error: "Content ID is required" });
        }
        const result = yield db_1.contentModel.deleteMany({
            _id: contentId,
            userId: userId,
        });
        if (result.deletedCount === 0) {
            res.status(404).send({ error: "Content not found or already deleted" });
        }
        const remainingContent = yield db_1.contentModel
            .find({ userId: userId })
            .populate("userId");
        res.json({
            message: "Content deleted successfully",
            remainingContent,
        });
    }
    catch (error) {
        console.error("Error deleting content:", error);
        res.status(500).send({ error: "Error deleting content" });
    }
}));
/// shareModal API
app.get("/api/v1/getShareLink", middlewares_1.checkUser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //@ts-ignore
    const userId = req.userId;
    const result = yield db_1.userModel.findOne({
        _id: userId
    });
    res.json({
        result
    });
}));
/// card share icon api
app.post("/api/v1/brain/shareLink", middlewares_1.checkUser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //@ts-ignore
        const userId = req.userId;
        const contentId = req.body.contentId;
        const existingShare = yield db_1.shareModel.findOne({ contentId: contentId });
        if (existingShare) {
            res.status(200).send({ shortURL: existingShare.link });
        }
        else {
            const axiosResponse = yield axios_1.default.get(`${BACKENDURL}/content`, {
                headers: {
                    Authorization: req.headers["authorization"],
                },
            });
            const allContent = axiosResponse.data.result;
            const filteredContent = allContent.filter((content) => content._id === contentId);
            const link = filteredContent.map((content) => content.link);
            const longLink = link[0];
            const shortURL = yield (0, helpers_1.shortenLink)(longLink);
            yield db_1.shareModel.create({
                link: shortURL,
                contentId: contentId,
                userId: userId
            });
            console.log(shortURL);
            res.send({
                shortURL
            });
        }
    }
    catch (error) {
        //@ts-ignore
        console.error("Error sharing content:", error.message);
        res.status(500).send({ error: "Error sharing content" });
    }
}));
app.get("/api/v1/brain/:shareToken", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const shareToken = req.params.shareToken;
        // Find the user by their shareToken
        // let user;
        // try {
        const user = yield db_1.userModel.findOne({ shareToken });
        // } catch (error) {
        //@ts-ignore
        // console.error("Error fetching shared links:", error.message);
        // return res.status(500).json({ error: "Internal server error" });
        // }
        if (user == null) {
            res.status(404).json({ error: "User not found" });
        }
        else {
            //******************************************
            //  try to make all the links using tiny url
            //  const links = await shareModel.find({ userId: user._id }).populate("contentId");
            // *****************************************
            // Find all links associated with the user's ID
            //@ts-ignore
            const links = yield db_1.contentModel.find({ userId: user._id });
            res.status(200).json({
                //@ts-ignore
                userId: user._id,
                links,
            });
        }
    }
    catch (error) {
        //@ts-ignore
        console.error("Error fetching shared links:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}));
app.get("/api/v1/chat", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f;
    const message = req.query.message;
    const prePrompts = [
        { text: "You are an AI assistant that manages and provides information about various content, including videos, tweets, links, and general topics. Be precise and concise in your responses. but also give a litlle extra info" },
        { text: "For videos, provide a brief summary or relevant details." },
        { text: "For tweets, include the tweet content, author, and relevant hashtags." },
        { text: "give to the point answers but also hallucinate a bit but remember to answer the question every time in detail" },
        { text: "For links, give a short description of the content they lead to." },
        { text: "For other topics, provide a  overview (under 80 words)." },
        { text: "Ensure responses are clear, accurate, and to the point." },
        { text: "Respond only in plain text, without any formatting such as bold, italics, or markdown." },
        {
            text: `Avoid using any special characters in your answers, including but not limited to:
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
    - ~ (tilde)`
        }
    ];
    try {
        // Send a POST request to the Gemii API (replace with the actual endpoint)
        const response = yield axios_1.default.post(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${config_2.GEMINI_API_KEY}`, {
            contents: [
                {
                    parts: [
                        ...prePrompts,
                        { text: message } // Use the incoming message here
                    ]
                }
            ]
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // const response  = await anthropic.messages.create({
        //   model: "claude-3-5-sonnet-20241022",
        //   max_tokens: 1024,
        //   messages: [{ role: "user", content: message }],
        // });
        // Handle the response from Gemii
        res.status(200).json({
            // mssg:response.data// Forward the data from Gemii's response
            mssg: (_f = (_e = (_d = (_c = (_b = (_a = response.data) === null || _a === void 0 ? void 0 : _a.candidates) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.content) === null || _d === void 0 ? void 0 : _d.parts) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.text
        });
    }
    catch (error) {
        // Handle errors
        console.error(error);
    }
}));
app.listen(3000);
console.log("backend Rnning");
