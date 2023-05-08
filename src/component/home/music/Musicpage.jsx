import React, { useState, useEffect } from 'react';
import './Musicpage.css';
import mymusic from './songgg.mp3';

const Musicpage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audio = new Audio(mymusic);

  const handlePlayPause = () => {
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    audio.addEventListener("ended", () => {
      setIsPlaying(false);
    });

    audio.addEventListener("canplaythrough", () => {
      audio.play();
      setIsPlaying(true);
    });

    return () => {
      audio.removeEventListener("ended", () => {
        setIsPlaying(false);
      });
      audio.removeEventListener("canplaythrough", () => {
        audio.play();
        setIsPlaying(true);
      });
    };
  }, []);

  return (
    <>
      <div className="music-player">
        <button id='musicBtn' onClick={handlePlayPause}>
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
    </>
  );
}

export default Musicpage;
