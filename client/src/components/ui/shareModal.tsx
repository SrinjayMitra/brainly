import { CrossIcon } from "@/Icons/crossIcon";
import { Button } from "./button";

interface LinksModalProps {
  ShowModal: boolean;
  SetShowModal: (show: boolean) => void;
  links: string[];
}

export function LinksModal({ ShowModal, SetShowModal, links }: LinksModalProps) {
  return (
    <>
      {ShowModal && (
        <div className="h-screen w-full fixed top-0 left-0 flex items-center justify-center">
          {/* Semi-transparent background */}
          <div className="absolute inset-0 bg-slate-400 opacity-70"></div>

          {/* Modal content */}
          <div className="relative bg-white p-6 rounded-lg shadow-lg justify-items-end m-2">
            <span className="cursor-pointer">
              <CrossIcon
                size="lg"
                onClick={() => {
                  SetShowModal(false);
                }}
              ></CrossIcon>
            </span>
            <div className="space-y-4 m-2">
              <h2 className="text-xl font-semibold text-gray-800 text-center">
                Share Your Stuff
              </h2>

              {/* Display links */}
              <div className="space-y-2">
                {links.length > 0 ? (
                  links.map((link, index) => (
                    <div
                      key={index}
                      className="text-blue-500 hover:underline p-3 rounded-lg shadow-sm bg-gray-100"
                    >
                      <a href={link} target="_blank" rel="noopener noreferrer">
                        {link}
                      </a>
                    </div>
                  ))
                ) : (
                  <div>No links available</div>
                )}
              </div>

              {/* Close Button */}
              <div className="flex justify-center">
                <Button
                  className="bg-purple-300 px-6 py-2 cursor-pointer hover:bg-purple-100 transition-all"
                  onClick={() => SetShowModal(false)}
                >
                  <div>Close</div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
    