"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";

interface VideoPlayerProps {
  videoId: string;
  className?: string;
}

export function VideoPlayer({ videoId, className = "" }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handlePlayPause = () => {
    if (iframeRef.current) {
      const message = isPlaying ? { method: "pause" } : { method: "play" };
      iframeRef.current.contentWindow?.postMessage(message, "*");
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== "https://player.vimeo.com") return;
      
      if (event.data.event === "play") {
        setIsPlaying(true);
      } else if (event.data.event === "pause") {
        setIsPlaying(false);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div className={`relative bg-[#922797] rounded-3xl overflow-hidden ${className}`}>
      {/* Video Container */}
      <div className="relative w-full h-full">
        <iframe
          ref={iframeRef}
          src={`https://player.vimeo.com/video/${videoId}?background=1&autoplay=0&loop=1&byline=0&title=0&portrait=0&controls=0`}
          className="absolute inset-0 w-full h-full"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
        
        {/* Custom Play/Pause Button */}
        {showControls && (
          <button
            onClick={handlePlayPause}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors"
          >
            {isPlaying ? (
              <Pause size={24} className="text-white" />
            ) : (
              <Play size={24} className="text-white ml-1" />
            )}
          </button>
        )}
      </div>
    </div>
  );
}
