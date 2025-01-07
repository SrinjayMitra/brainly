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
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("./helpers");
function logShortenedLink() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const shortenedLink = yield (0, helpers_1.shortenLink)("https://petal-estimate-4e9.notion.site/Backend-1407dfd1073580d8adccfe2a94b6cd86");
            console.log(`Shortened Link: ${shortenedLink}`);
        }
        catch (error) {
            console.error('Error:', error);
        }
    });
}
logShortenedLink();
