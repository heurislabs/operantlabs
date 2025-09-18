"use client";

import { useState } from "react";
import { Dialog } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { X, Play } from "lucide-react";

interface YouTubeModalProps {
  videoId: string;
  title: string;
  thumbnail?: string;
  className?: string;
}

export function YouTubeModal({ videoId, title, thumbnail, className = "" }: YouTubeModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const getThumbnailUrl = () => {
    if (thumbnail) return thumbnail;
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`relative group overflow-hidden rounded-lg ${className}`}
      >
        <img
          src={getThumbnailUrl()}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
            <Play size={32} className="text-white ml-1" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <h3 className="text-white font-semibold text-sm">{title}</h3>
        </div>
      </button>

      {/* Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <div className={`fixed inset-0 z-50 ${isOpen ? 'block' : 'hidden'}`}>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Modal Content */}
          <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl mx-4">
            <div className="bg-black rounded-lg overflow-hidden shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-800">
                <h2 className="text-white font-semibold">{title}</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-gray-800"
                >
                  <X size={20} />
                </Button>
              </div>
              
              {/* Video */}
              <div className="relative aspect-video">
                {isOpen && (
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}
