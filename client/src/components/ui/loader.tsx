import React from "react";
import { FaSpinner } from "react-icons/fa"; // You can use any icon you like

const LoaderPage: React.FC = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-gray-900">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Loader Container */}
      <div className="relative flex flex-col items-center justify-center">
        <FaSpinner className="animate-spin text-6xl text-white" />
        <h2 className="text-white text-xl mt-4 font-medium">Loading, Please Wait...</h2>
      </div>
    </div>
  );
};

export default LoaderPage;
