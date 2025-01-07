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
exports.checkUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("./config");
const db_1 = require("./db");
const checkUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const header = req.headers["authorization"];
    if (!header) {
        res.status(403).send({ error: "Authorization header is missing" });
        return;
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(header, config_1.SECRET_KEY);
        console.log(decoded);
        //@ts-ignore
        const userName = decoded.userName;
        if (decoded) {
            //@ts-ignore
            const user = yield db_1.userModel.findOne({ userName });
            if (!user) {
                res.status(404).send({ error: "User not found" });
            }
            //@ts-ignore
            req.userId = user._id;
            //@ts-ignore
            console.log("User ObjectId:", req.userId);
            next();
        }
        else {
            res.status(403).send({ error: "Not logged in" });
        }
    }
    catch (err) {
        res.status(403).send({ error: "Invalid or expired token" });
    }
});
exports.checkUser = checkUser;
