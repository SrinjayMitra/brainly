import { shortenLink } from "./helpers";

async function logShortenedLink() {
    try {
      const shortenedLink = await shortenLink("https://petal-estimate-4e9.notion.site/Backend-1407dfd1073580d8adccfe2a94b6cd86");
      console.log(`Shortened Link: ${shortenedLink}`);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  logShortenedLink();
