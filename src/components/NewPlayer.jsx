import React, {forwardRef, useImperativeHandle, useState, useRef, useEffect } from 'react';
import albumsData from '../data/albumData';
import "../styles/player.css";


const NewPlayer = forwardRef(({ currentIndex, isPlaying, setIsPlaying },ref) => {
  const [currentMusicIndex, setCurrentMusicIndex] = useState(0);
  const [audioProgress, setAudioProgress] = useState(0);
  const [duration, setDuration] = useState('00:00');
  const [currentTime, setCurrentTime] = useState('00:00');

  const audioRef = useRef(null);
  const playlist = albumsData[currentIndex].playlist;
  const currentTrack = playlist[currentMusicIndex];

  useEffect(() => {
  if (audioRef.current) {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;

    setAudioProgress(0);
    setCurrentTime('00:00');
    setDuration('00:00');
    setIsPlaying(false);
    setCurrentMusicIndex(0);
  }

  // setCurrentMusicIndex(0); 
}, [currentIndex]);

  // Format mm:ss
  const formatTime = (time) => {
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);
    return `${min < 10 ? '0' + min : min}:${sec < 10 ? '0' + sec : sec}`;
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio) return;

    const progress = (audio.currentTime / audio.duration) * 100;
    setAudioProgress(isNaN(progress) ? 0 : progress);
    setCurrentTime(formatTime(audio.currentTime));
  };

  const handleLoadedMetadata = () => {
    const audio = audioRef.current;
    if (!audio) return;
    setDuration(formatTime(audio.duration));
  };

  const handleBarClick = (e) => {
    const audio = audioRef.current;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const newTime = (clickX / width) * audio.duration;
    audio.currentTime = newTime;
  };

  // Expose play/pause to parent via ref
  useImperativeHandle(ref, () => ({
  play: () => {
    audioRef.current.play();
    setIsPlaying(true);
  },
  pause: () => {
    audioRef.current.pause();
    setIsPlaying(false);
  },
  toggle: () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  },
  reset: () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsPlaying(false);
  }
}));

  return (
    <div className="player-container">
      <audio
        key={currentTrack.url}
        ref={audioRef}
        
        src={currentTrack.url}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />
      {console.log(currentTrack.url) }

      <div className="progress-container" onClick={handleBarClick}>
        <div
          className="progress-bar"
          style={{ width: `${audioProgress}%` }}
        />
        <div 
            className="progress-cursor"
            style={{ left: `${audioProgress}%` }}
        >
            <svg viewBox="0 0 100 100" className="star-svg">
            <polygon
                points="50,0 61,35 98,35 67,57 79,91 50,70 21,91 33,57 2,35 39,35"
                stroke="#C8FF00"
                fill="black"
                strokeWidth="5"
            />
            </svg>
        </div>
      </div>

      <div className="musicTimerDiv">
         <p className="musicCurrentTime">{currentTime}</p>
         <div className='defile'> 
          {isPlaying ? (
            <p className='titreArt'>
              {playlist[currentMusicIndex].title} – {playlist[currentMusicIndex].artiste}
            </p>
              ) : (
                <p className='titreArt'>
              {/* {playlist[currentMusicIndex].title} – {playlist[currentMusicIndex].artiste} */}
            </p>
              )}
         
         </div> 
         <p className="musicTotalLength">{duration}</p>
    </div>

    </div>
  );
});

export default NewPlayer;