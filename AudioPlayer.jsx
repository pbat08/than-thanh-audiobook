import React, { useState, useRef, useEffect } from 'react';
import { useStore } from '../store';

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const progressRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const { currentBook, currentChapter, isPlaying, setIsPlaying } = useStore();

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [setIsPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handlePrevious = () => {
    // Implement previous chapter logic
  };

  const handleNext = () => {
    // Implement next chapter logic
  };

  const handleProgressClick = (e) => {
    if (!audioRef.current || !progressRef.current) return;

    const rect = progressRef.current.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    const newTime = percent * duration;
    
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleProgressDrag = (e) => {
    if (!isDragging) return;
    handleProgressClick(e);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  if (!currentBook) {
    return (
      <div className="bg-gray-100 p-4 text-center">
        <p className="text-gray-600">Chưa có sách nào được chọn</p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <div className="flex items-center mb-4">
        <img
          src={currentBook.coverImage}
          alt={currentBook.title}
          className="w-16 h-16 object-cover rounded"
        />
        <div className="ml-4">
          <h3 className="text-lg font-semibold">{currentBook.title}</h3>
          <p className="text-gray-600">Chương {currentChapter + 1}</p>
        </div>
      </div>

      <div className="relative mb-4">
        <div
          ref={progressRef}
          className="h-2 bg-gray-200 rounded-full cursor-pointer"
          onClick={handleProgressClick}
          onMouseMove={handleProgressDrag}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
        >
          <div
            className="h-full bg-blue-600 rounded-full"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          />
        </div>
        <div className="flex justify-between text-sm text-gray-600 mt-1">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <div className="flex justify-center items-center space-x-4">
        <button
          onClick={handlePrevious}
          className="p-2 rounded-full hover:bg-gray-100"
          title="Chương trước"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={handlePlayPause}
          className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700"
          title={isPlaying ? 'Tạm dừng' : 'Phát'}
        >
          {isPlaying ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          )}
        </button>

        <button
          onClick={handleNext}
          className="p-2 rounded-full hover:bg-gray-100"
          title="Chương tiếp theo"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <audio
        ref={audioRef}
        src={currentBook.audioFiles[currentChapter]?.url}
        className="hidden"
      />
    </div>
  );
};

export default AudioPlayer; 