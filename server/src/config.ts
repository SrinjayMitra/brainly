// export const SECRET_KEY = "SEXXXXXXXXXXXXX";
// export const uri = "mongodb+srv://srinjay:Srinjay%402004@cluster0.1shl9.mongodb.net/brainly";
// export const TINY_API_KEY: string = 'cnCKgifMJ3y3KHycpstvL7YMGxs9QYzPmC06gq0CZoQZBfwb8APULGuGKCVI';
// export const apiUrl = `https://api.tinyurl.com/create?api_token=${TINY_API_KEY}`;



export const SECRET_KEY = process.env.SECRET_KEY;
export const uri = process.env.MONGO_URI;
export const TINY_API_KEY = process.env.TINY_API_KEY;
export const apiUrl = `https://api.tinyurl.com/create?api_token=${TINY_API_KEY}`;
