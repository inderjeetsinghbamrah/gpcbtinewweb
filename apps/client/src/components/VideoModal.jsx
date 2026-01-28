import React, {useEffect} from 'react';
import {X} from 'lucide-react';

export default function VideoModal({ isOpen, onClose, videoUrl }) {

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);


  if (!isOpen) return null;

  return (
      <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4"
          onClick={onClose}
      >
        {/* MODAL BOX */}
        <div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
        >
          {/* CLOSE BUTTON */}
          <button
              onClick={onClose}
              className="absolute top-3 right-3 z-10 bg-white/90 p-2 rounded-full hover:bg-white"
          >
            <X className="w-5 h-5 text-black" />
          </button>

          {/* VIDEO */}
          <iframe
              className="w-full h-full"
              src={videoUrl}
              title="Institute Video"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
          />
        </div>
      </div>
  );
}
