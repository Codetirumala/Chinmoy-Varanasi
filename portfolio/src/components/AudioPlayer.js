import React, { useState, useRef, useEffect } from 'react';
import './AudioPlayer.css';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [showControls, setShowControls] = useState(false);
  const audioRef = useRef(null);

  // Professional background music - calm, pleasant instrumental
  const musicUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3";

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.log('Audio playback failed:', error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  return (
    <div className="audio-player">
      <audio
        ref={audioRef}
        src={musicUrl}
        onEnded={handleEnded}
        loop
        preload="metadata"
      />
      
      <div className="audio-controls">
        <button
          className={`play-button ${isPlaying ? 'playing' : ''}`}
          onClick={togglePlay}
          onMouseEnter={() => setShowControls(true)}
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
        >
          <i className={`fas fa-${isPlaying ? 'pause' : 'play'}`}></i>
        </button>
        
        {showControls && (
          <div 
            className="volume-control"
            onMouseLeave={() => setShowControls(false)}
          >
            <div className="volume-slider-container">
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="volume-slider"
                aria-label="Volume control"
              />
              <div className="volume-icon">
                <i className={`fas fa-volume-${volume === 0 ? 'mute' : volume < 0.5 ? 'down' : 'up'}`}></i>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AudioPlayer; 