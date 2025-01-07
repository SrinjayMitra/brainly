import React, { useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../components/ui/card"; // Adjust imports as necessary
import { Button } from "../components/ui/button";
import { cn } from "./utils"; // Utility function for conditional classNames
import { ShareIcon} from "@/Icons/shareIcon";
import { TrashIcon } from "@/Icons/trashIcon";
import { TwitterIcon } from "@/Icons/twitterIcon";
import { NotesIcon } from "@/Icons/notesIcon";
import { YoutubeIcon } from "@/Icons/youtubeIcon";
import { LinkIcon } from "@/Icons/linkIcon";
// Replace with actual icons

// Define types for props
interface DynamicCardProps {
  type: "document" | "tweet" | "youtube" | "link"; // Card type
  title: string; // Card title
  description?: string; // Optional card description
  content: string; // URL, embed link, or text based on type
  tags?: string[]; // Tags to display
  addedDate: string; // Date the card was added
  icon?: React.ReactNode; // Optional icon for the header
  onShare?: () => void; // Callback for share button
  onDelete?: () => void; // Callback for delete button
  className?: string; // Additional Tailwind classes
}

declare global {
  interface Window {
    twttr: any; 
     // Declaring `twttr` as `any` so it bypasses TypeScript's strict typing
  }
}
const MyCard: React.FC<DynamicCardProps> = ({
  type,
  title,
  description,
  content,
  tags = [],
  addedDate,
  icon,
  onShare,
  onDelete,
  className,
}) => {
  useEffect(() => {
    if (type === "tweet") {
      const existingScript = document.querySelector("script[src='https://platform.twitter.com/widgets.js']");
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        document.body.appendChild(script);
        script.onload = () => {
          window.twttr?.widgets?.load();
        };
      } else {
        // Re-run widget loading if script already exists
        window.twttr?.widgets?.load();
      }
    }
  }, [type]);
  const renderContent = () => {
    switch (type) {
      case "document":
        return (
          <div className="text-sm text-muted-foreground">
            <p>{content}</p>
          </div>
        );
      case "tweet":
        return (
      <div className="relative no-scrollbar overflow-y-scroll max-h-64 rounded-md">
        <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
        <blockquote
          className="twitter-tweet w-full"
          data-lang="en"
          style={{ maxWidth: "100%" }}
        >
         {content=content.replace("x","twitter")}
          <a href={content}>
            Tweet Link
          </a>
        </blockquote>
        <div className="no-scrollbar text-pretty text-sm overflow-auto p-4 rounded-md ">
        <a 
              href={content}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline mt-2 block px-4 py-2 rounded-md  cursor-pointer transition-all duration-200 ease-in-out"
            >
              🌐 Visit: {content}
            </a>
        </div>   
      </div>
        );
      case "youtube":
        return (
            <div className="relative w-full min-h-24 aspect-video bg-gray-200 rounded-md overflow-hidden">
                 {content = content.replace("/watch?v=","/embed/" )}
            <iframe
              src={content}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
        <div className="no-scrollbar text-pretty text-sm overflow-auto p-4 rounded-md ">
        <a 
              href={content}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline mt-2 block px-4 py-2 rounded-md  cursor-pointer transition-all duration-200 ease-in-out"
            >
              🌐 Visit: {content}
            </a>
        </div>  
          </div>
        );
      case "link":
        return (
            <div className="relative no-scrollbar overflow-y-scroll max-h-64 rounded-md ">
            <iframe
              src={content}
              title="Link Preview"
              className="w-full h-48 rounded-md border"
              frameBorder="0"
            />
            <div className="no-scrollbar text-pretty text-sm overflow-auto p-4 rounded-md ">
            <a 
              href={content}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline mt-2 block px-4 py-2 rounded-md  cursor-pointer transition-all duration-200 ease-in-out"
            >
              🌐 Visit: {content}
            </a>
        </div> 
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Card className={cn("max-w-80 h-fit border rounded-2xl shadow-sm p-3", className)}>
      <CardHeader>
        <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
        {type === "tweet" && <TwitterIcon size="lg" />}
        {type === "document" && <NotesIcon size="xl" />}
        {type === "youtube" && <YoutubeIcon size="xl" />}
        {type === "link" && <LinkIcon size="lg" />}
            {icon && <span className="text-xl">{icon}</span>}
          <CardTitle>{title}</CardTitle>
        </div>
        <div className="flex space-x-1 justify-items-end ">
          <Button variant="ghost" size="icon" onClick={onShare}>
            <ShareIcon size="md" />
          </Button>
          <Button variant="ghost" size="icon" onClick={onDelete}>
            <TrashIcon size="md" />
          </Button>
        </div>
        </div>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="mt-4">{renderContent()}</CardContent>
      <CardFooter className="flex items-center justify-between">
        <div className="flex space-x-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-600 px-2 py-1 text-xs rounded-xl"
            >
              #{tag}
            </span>
          ))}
        </div>
      </CardFooter>
      <div className="flex text-sm text-muted-foreground mb-2 pl-4 ju">Added on {addedDate}</div>
    </Card>
  );
};

export default MyCard;
