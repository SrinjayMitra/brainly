import { CrossIcon } from "@/Icons/crossIcon";
import { Button } from "./button";
import { Combobox } from "@/components/ui/Combobox";
import { useState } from "react";
import { addContent } from "@/lib/utils";

interface ContentModalProps {
  ShowModal: boolean;
  SetShowModal: (show: boolean) => void;
}

export function ContentModal({ ShowModal, SetShowModal }: ContentModalProps) {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [tags, setTags] = useState<string[]>([]); // State for tags
  const [tagInput, setTagInput] = useState(""); // Input for adding tags

  const handleAddTag = () => {
    if (tagInput.trim()) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  async function handleSubmit() {
    if (!title || !link || !selectedType) {
      alert("Please fill out all required fields!");
      return;
    }

    const formData = {
      title,
      description,
      type: selectedType,
      link,
      tags,
    };

    try {
      await addContent(formData);
    } catch (error: any) {
      console.log(error);
    }
    SetShowModal(false);
  }

  return (
    <>
      {ShowModal && (
        <div className="h-screen w-full fixed top-0 left-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-slate-400 opacity-70"></div>
          <div className="relative bg-white p-6 rounded-lg shadow-lg justify-items-end m-2">
            <span className="cursor-pointer">
              <CrossIcon size="lg" onClick={() => SetShowModal(false)} />
            </span>
            <div className="space-y-4 m-2">
              <h2 className="text-xl font-semibold text-gray-800 text-center">
                Add New Content
              </h2>
              <div>
                <input
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="rounded-lg border-2 shadow-sm px-4 py-2 focus:ring-2 transition-all"
                />
              </div>
              <div>
                <input
                  placeholder="Description (Optional)"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="rounded-lg border-2 shadow-sm px-4 py-2 focus:ring-2 transition-all"
                />
              </div>
              <div>
                <input
                  placeholder="Link"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  className="rounded-lg border-2 shadow-sm px-4 py-2 focus:ring-2 transition-all"
                />
              </div>
                           {/* Tags Input */}
                           <div>
                <input
                  placeholder="Add tag"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAddTag()}
                  className="rounded-lg border-2 shadow-sm px-4 py-2 focus:ring-2 transition-all"
                />
                <div className="flex flex-wrap mt-2 space-x-2">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-300 rounded-full px-2 py-1 text-sm flex items-center"
                    >
                      {tag}
                      <button
                        type="button"
                        className="ml-2 text-red-500"
                        onClick={() => handleRemoveTag(tag)}
                      >
                        &times;
                      </button>
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <Combobox onSelect={(value: string) => setSelectedType(value)} />
              </div>
 
              <div className="flex justify-center">
                <Button
                  className="bg-purple-300 px-6 py-2 hover:bg-purple-100 transition-all"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
