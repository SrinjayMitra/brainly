"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.shareModel = exports.userModel = exports.contentModel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const config_1 = require("./config");
const uuid_1 = require("uuid");
var ContentType;
(function (ContentType) {
    ContentType["DOCUMENT"] = "document";
    ContentType["TWEET"] = "tweet";
    ContentType["YOUTUBE"] = "youtube";
    ContentType["LINK"] = "link";
})(ContentType || (ContentType = {}));
mongoose_1.default.connect(config_1.uri);
let token = String((0, uuid_1.v4)());
const MySchema = new mongoose_1.Schema({
    userName: { type: String, unique: true },
    password: { type: String, required: true },
    shareToken: { type: String, unique: true, default: token }
});
const contentSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: false },
    type: { type: String, enum: Object.values(ContentType) },
    link: { type: String, required: true },
    addedDate: { type: String, required: true },
    tags: [{ type: String }], // Correct ref placement
    userId: { type: mongoose_1.default.Types.ObjectId, ref: 'Users', required: true }, // Correct ref placement
});
const shareSchema = new mongoose_1.Schema({
    link: { type: String, required: true },
    contentId: { type: mongoose_1.default.Types.ObjectId, ref: 'Content', required: true },
    userId: { type: mongoose_1.default.Types.ObjectId, ref: 'Users', required: true }
});
exports.contentModel = (0, mongoose_1.model)("Content", contentSchema);
exports.userModel = (0, mongoose_1.model)("Users", MySchema);
exports.shareModel = (0, mongoose_1.model)("shareLinks", shareSchema);
