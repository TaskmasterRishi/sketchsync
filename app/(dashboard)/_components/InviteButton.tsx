import Hint from "@/components/Hint";
import { Button } from "@/components/ui/button";
import { OrganizationProfile } from "@clerk/nextjs";
import { Plus, X } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

const InviteButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative z-40">
      {/* Hidden on mobile (sm:hidden) */}
      <div className="sm:block hidden">
        <Button onClick={() => setIsOpen(true)} className="w-full sm:w-auto">
          <Plus className="h-4 w-4 mr-2" /> Invite Members
        </Button>
      </div>
      {/* Visible only on mobile (block sm:hidden) */}
      <div className="block sm:hidden">
        <Hint label="Invite Members" side="bottom" align="center">
          <Button onClick={() => setIsOpen(true)} className="w-full sm:w-auto">
            <Plus className="h-4 w-4" />
          </Button>
        </Hint>
      </div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div ref={modalRef} className="relative w-fit mx-4 my-auto">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 p-1 z-50 text-gray-800 hover:text-gray-900"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="p-0 bg-transparent border-none max-w-[800px]">
              <OrganizationProfile routing="hash" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InviteButton;
