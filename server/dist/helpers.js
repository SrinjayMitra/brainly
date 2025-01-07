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
exports.shortenLink = shortenLink;
exports.verifyPassword = verifyPassword;
const config_1 = require("./config");
const bcrypt_1 = __importDefault(require("bcrypt"));
function shortenLink(URL) {
    return __awaiter(this, void 0, void 0, function* () {
        const requestBody = JSON.stringify({
            url: URL
        });
        try {
            const response = yield fetch(config_1.apiUrl, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: requestBody
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = yield response.json();
            return data.data.tiny_url;
            // console.log('Shortened URL:', data.data.tiny_url);
        }
        catch (error) {
            //@ts-ignore
            console.error('Error shortening link:', error.message);
        }
    });
}
function verifyPassword(userPassword, storedHashedPassword) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const isMatch = yield bcrypt_1.default.compare(userPassword, storedHashedPassword);
            return isMatch;
        }
        catch (error) {
            console.error("Error verifying password:", error);
            return false;
        }
    });
}
