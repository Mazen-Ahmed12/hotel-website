import React, { useEffect, useRef } from 'react';
import { Icon } from '../../../components/icon';

export const VideoDialog = ({ isOpen, onClose, videoSrc }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    } else {
      document.removeEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div 
      ref={dialogRef}
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 animate-fade-in"
      onClick={(e) => {
        if (dialogRef.current === e.target) {
          onClose();
        }
      }}
    >
      <div className="relative w-full max-w-4xl bg-black rounded-lg shadow-2xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white bg-black/50 rounded-full p-1 hover:bg-black/75 transition-colors z-10"
          aria-label="Close video"
        >
          <Icon name="x" size={24} />
        </button>
        <video
          src={videoSrc}
          controls
          autoPlay
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

