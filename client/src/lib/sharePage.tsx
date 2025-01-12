import { useEffect, useState } from "react"; // Import useState here
import MyCard from "@/lib/myCard";
import { useParams } from 'react-router-dom';
import { useContent } from "./useContent";
import LoaderWheel from "@/components/ui/loader";
import { ContentModal } from "@/components/ui/ContentModal";
import { LinksModal } from "@/components/ui/shareModal";
import axios from "axios";
import { BACKENDURL } from "./utils";

export function SharePage() {
  // Getting the dynamic 'sharelink' from the URL
  const { shareLink } = useParams();
  console.log(shareLink);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fetchedLinks, setFetchedLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { shareContent } = useContent();

  useEffect(() => {
    if (shareLink) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `${BACKENDURL}/brain/${shareLink}`
            // `http://localhost:3000/api/v1/brain/${shareLink}`
          );
          
          if (response.data && response.data.links) {
            setFetchedLinks(response.data.links); // Set the fetched content data
            setIsModalOpen(true); // Open the modal after data is fetched
          } else {
            console.error("Invalid data format from API.");
          }
        } catch (error) {
          console.error("Error fetching shared content:", error);
        } finally {
          setLoading(false); // Set loading to false once data fetching is done
        }
      };
      fetchData();
    }
  }, [shareLink]); // Add shareLink to the dependency array to re-run if it changes

  // if (loading) return <LoaderWheel />; // Show the loader while fetching content

  return (
    <div className="h-full w-full bg-slate-200 pt-3 px-4">
      <div className="flex justify-center mb-6">
        <h1 className="text-4xl font-semibold text-purple-300">Shared Brain</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {fetchedLinks.length === 0 ? (
          <div className="flex items-center justify-center min-h-screen w-full">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800">No Content Found</h2>
              <p className="mt-4 text-gray-600">Sorry, we couldn't find any content. Try adding some.</p>
            </div>
          </div>
        ) : (
          fetchedLinks.map(({ _id, type, link, description, title, tags, addedDate }) => (
            <MyCard
              key={_id}
              type={type}
              title={title}
              description={description}
              content={link}
              tags={tags}
              addedDate={addedDate}
              // Uncomment and implement delete and share functionality if needed
              // onDelete={() => deleteContent({ contentId: _id })}
              onShare={() => shareContent({ contentId: _id })}
            />
          ))
        )}
      </div>

      {/* Modal handling if required */}
      {/* {isModalOpen && (
        <LinksModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          links={fetchedLinks}
        />
      )} */}
    </div>
  );
}
