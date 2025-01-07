import { TINY_API_KEY } from "./config";
import { apiUrl } from "./config";
import bcrypt from "bcrypt";


export async function shortenLink(URL:string): Promise<string | undefined> {

  const requestBody = JSON.stringify({
    url: URL
  });

  try {
    const response = await fetch(apiUrl, {
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

    const data = await response.json();
    return data.data.tiny_url;
    // console.log('Shortened URL:', data.data.tiny_url);
  } catch (error) {
    //@ts-ignore
    console.error('Error shortening link:', error.message);
  }
}


export async function verifyPassword(userPassword: string, storedHashedPassword: string) {
  try {
    const isMatch = await bcrypt.compare(userPassword, storedHashedPassword);
    return isMatch;
  } catch (error) {
    console.error("Error verifying password:", error);
    return false;
  }
}