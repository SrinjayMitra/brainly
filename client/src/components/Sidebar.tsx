import { useState } from "react";
import { SidebarItems } from "./ui/SidebarItems";
import { TwitterIcon } from "@/Icons/twitterIcon";
import { YoutubeIcon } from "@/Icons/youtubeIcon";
import { NotesIcon } from "@/Icons/notesIcon";
import { LinkIcon } from "@/Icons/linkIcon";
import { Logo } from "@/Icons/Logo";
import LogoutIcon from "@/Icons/logoutIcon";
import HomeIcon from "@/Icons/home";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import icons for collapse/expand

export function Sidebar() {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false); // State to control collapse
  const toggleSidebar = () => setIsCollapsed(!isCollapsed); // Function to toggle

  return (
    <div
      className={`h-screen fixed top-0 left-0 transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-52"
      } bg-white border-r border-slate-500 border-2`}
    >
      <div className="flex mt-4 items-center justify-between">
        <Logo />
        {/* Show the "Brainly" text only when not collapsed */}
        <div className={`text-3xl font-medium text-gray-900 hover:text-purple-300 cursor-pointer ${isCollapsed ? "hidden" : ""}`} onClick={()=>{
            navigate("/dashboard")
        }}>
          Brainly
        </div>
        <button
          className="p-2 text-gray-600"
          onClick={toggleSidebar} // Button to toggle collapse
        >
          {isCollapsed ? (
            <FaChevronRight size={20} /> // Icon for expanding
          ) : (
            <FaChevronLeft size={20} /> // Icon for collapsing
          )}
        </button>
      </div>

      <div className={`p-1 mt-5 space-y-2 ${isCollapsed ? "hidden" : "block"}`}>
        <SidebarItems
          icon={<TwitterIcon size="lg" />}
          text="Tweets"
          onClick={() => navigate("/tweets")}
        />
        <SidebarItems
          icon={<YoutubeIcon size="lg" />}
          text="Videos"
          onClick={() => navigate("/videos")}
        />
        <SidebarItems
          icon={<NotesIcon size="lg" />}
          text="Documents"
          onClick={() => navigate("/documents")}
        />
        <SidebarItems
          icon={<LinkIcon size="lg" />}
          text="Links"
          onClick={() => navigate("/links")}
        />
        <SidebarItems
          icon={<HomeIcon size="md" />}
          text="Home"
          onClick={() => navigate("/dashboard")}
        />
        <SidebarItems
          icon={<LogoutIcon size="lg" />}
          text="Logout"
          onClick={() =>{
            localStorage.removeItem("token");
            navigate("/signin");
          }}
        />
      </div>
    </div>
  );
}
