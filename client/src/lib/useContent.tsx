import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { BACKENDURL } from "./utils";

export const useContent = () => {
  const [content, setContent] = useState([]); // Initialize as an array
  const [loading, setLoading] = useState<boolean>(false);

  // Fetch content
  const fetchContent = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${BACKENDURL}/content`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      setContent(response.data.result || []); // Set array safely
    } catch (error) {
      console.error("Error fetching content:", error);
    } finally {
      setLoading(false);
    }
  }, []); // Memoize fetchContent to avoid re-definition

  useEffect(() => {
    fetchContent(); // Load content when the component mounts
  }, [fetchContent]); // Re-run fetchContent if it changes

  // Delete content by contentId
  const deleteContent = async ({ contentId }: { contentId: string }) => {
    try {
      await axios.delete(`${BACKENDURL}/content`, {
        data: { contentId }, // Send contentId in the request body
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });

      // After deleting, refetch the content to update the UI
      fetchContent();
    } catch (error) {
      console.error("Error deleting content:", error);
    }
  };

  const shareContent = async ({ contentId }: { contentId: string }) => {
    try {
      const token = localStorage.getItem("token");
  
      if (!token) {
        alert("You need to log in first!");
        return;
      }
  
     
      const response = await axios.post(
        `${BACKENDURL}/getToken`, 
        {
          contentId, 
        },
        {
          headers: {
            Authorization: token, 
          },
        }
      );
  
      
      const shortURL = response.data.shortURL;
  
     
      await navigator.clipboard.writeText(shortURL);
  
     
      alert("Link copied to clipboard!");
  
    } catch (error) {
      console.error("Error sharing content:", error);
      alert("Failed to share the content.");
    }
  };

  const shareAllContent = async () => {
    try {
        // Fetching the shareToken
        const response = await axios.get(`${BACKENDURL}/getShareLink`, {
            headers: {
                Authorization: localStorage.getItem("token"),
            },
        });

        const shareToken = response.data.result.shareToken;
        console.log(shareToken); // Renamed for clarity

        try {
            // Fetching links using the shareToken
            const linksResponse = await axios.get(`${BACKENDURL}/brain/${shareToken}`);
            const links = linksResponse.data.links;

            // Extracting URLs from the links array
            //@ts-ignore
            // const linkURLs = links.map(linkObj => linkObj.link).join('\n');  // Renamed variable for clarity
             //@ts-ignore
            const newLinksArray = links.map(linkObj => linkObj.link);
            console.log(newLinksArray);
            return newLinksArray;
                    
        } catch (error) {
            console.error("Error fetching content from the brain API:", error);
        }
    } catch (error) {
        console.error("Error fetching share token:", error);
    }
   
};

  const addContent = async ({
    title,
    description,
    type,
    link,
  }: {
    title: string;
    description: string;
    type: string;
    link: string;
  }) => {
    try {
      const response = await axios.post(
        `${BACKENDURL}/content`,
        {
          title,
          description,
          type,
          link,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      console.log("Content added successfully:", response.data);

      // After adding, refetch the content to update the UI
      fetchContent();

      return response.data; // Return the response data for further use
    } catch (error: any) {
      console.error("Error adding content:", error.response?.data || error.message);
      throw error; // Re-throw the error for handling in the caller function
    }
  };

  return {
    content,
    loading,
    shareContent,
    shareAllContent,
    deleteContent,
    addContent
};
}
