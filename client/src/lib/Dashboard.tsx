import  { useState } from "react"; // Import useState here
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { PlusIcon } from "@/Icons/addIcon";
import { ContentModal } from "@/components/ui/ContentModal";
import { Sidebar } from "@/components/Sidebar";
import { ShareIcon } from "@/Icons/shareIcon";
import MyCard from "@/lib/myCard";
import { useContent } from "./useContent";
import LoaderWheel from "@/components/ui/loader";
import { LinksModal } from "@/components/ui/shareModal";

export function Dashboard() {
  // Declare state variables for the modal and alert visibility
  const [showModal, setShowModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  //@ts-ignore
  const [showAlert, setShowAlert] = useState(false);
  const { content, loading, deleteContent,shareContent,shareAllContent} = useContent();
  
  const [fetchedLinks, setFetchedLinks] = useState<string[]>([]);

  // Handle share action
  const handleShare = async () => {
    try {
      const links = await shareAllContent(); 
      setFetchedLinks(links);  
      setIsModalOpen(true);  
    } catch (error) {
      console.error("Error sharing content:", error);
    }
  };

  if (loading) return <LoaderWheel />;
  return (
    <div>
      <Sidebar />
      <div className="h-full w-fit bg-slate-200 pt-3 pr-1">
        <div className="w-screen">
          <div className="flex justify-end mr-5 space-x-2">
            <Button
              className="bg-purple-300 px-4 py-2 cursor-pointer hover:bg-purple-200 transition-all"
              onClick={() => {
                setShowModal(true);
              }}
            >
              <div className="pr-1 flex justify-items-center">
                <PlusIcon size="md" />
              </div>
              <div>Add Content</div>
            </Button>

            <Button
              className="bg-purple-300 px-6 py-2 cursor-pointer hover:bg-purple-100 transition-all"
              onClick={handleShare}
            >
              <div className="pr-2 flex justify-items-center ">
                <ShareIcon size="md" />
              </div>
              {/* Conditionally render the modal */}
              <div>Share</div>
            </Button>
          </div>

          {showAlert && (
            <Alert>
              <AlertTitle>Important Notice</AlertTitle>
              <AlertDescription>
                This is the description of the alert. Make sure to take action!
              </AlertDescription>
            </Alert>
          )}
        </div>

        <div className="flex space-x-5 ml-52 p-3 min-h-screen flex-wrap space-y-3">
          {/* <MyCard
            type="document"
            title="Project Document"
            description="Details of the upcoming project"
            content="This is the document content with detailed project info."
            tags={["project", "document"]}
            addedDate="12/03/2024"
          />

          <MyCard
            type="youtube"
            title="Project Document"
            description="Details of the upcoming project"
            content="https://www.youtube.com/watch?v=WKO88yY7zus"
            tags={["project", "document"]}
            addedDate="12/03/2024"
          />

          <MyCard
            type="tweet"
            title="Project Document"
            description="Details of the upcoming project"
            content="https://x.com/elonmusk/status/1875538271746634165"
            tags={["project", "document"]}
            addedDate="12/03/2024"
          />
          https://x.com/elonmusk/status/1875538271746634165

          <MyCard
            type="link"
            title="Useful Resource"
            description="Check out this amazing resource for developers."
            content="https://tailwindcss.com/docs/transition-property"
            tags={["resource", "link"]}
            addedDate="09/03/2024"
          />
          <MyCard
            type="document"
            title="Project Document"
            description="Details of the upcoming project"
            content="This is the document content with detailed project info."
            tags={["project", "document"]}
            addedDate="12/03/2024"
           /> */}
        
        
        
        {content.length === 0 ? (
      <div className="flex items-center justify-center min-h-screen w-full overflow-x-hidden">
      <div className="text-center p-6 bg-white rounded-lg shadow-md ">
        <h2 className="text-2xl font-semibold text-gray-800">No Content Found</h2>
        <p className="mt-4 text-gray-600">Sorry, we couldn't find any content. Try adding some.</p>
      </div>
    </div>
        ) :(
  content.map(({ _id,type, link, description, title, tags ,addedDate }) => {
    if(content.length == 0) {}
    return (
      <MyCard
        key={_id} // Consider using a unique key like _id if available
        type={type}
        title={title}
        description={description}
        content={link} // Correctly using updatedLink
        tags={tags}
        addedDate={addedDate} // Adjust if addedDate is dynamic
        onDelete={()=>{
          deleteContent({contentId: _id})
        }}
        onShare={()=>{
          shareContent({contentId:_id})
        }}
      />
    );
  })
)}
        </div>
      </div>
      <ContentModal ShowModal={showModal} SetShowModal={setShowModal} />
      {/* Links Modal - Only open if `isModalOpen` is true */}
      {isModalOpen && <LinksModal
        ShowModal={isModalOpen}
        SetShowModal={setIsModalOpen}
        links={fetchedLinks}  // Pass the fetched links to the modal
      />}
    </div>
  );
}
