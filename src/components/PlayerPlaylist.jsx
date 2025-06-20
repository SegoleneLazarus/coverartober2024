import React, { useState, useRef } from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import albumsData from '../data/albumData';



const PlayerPlayList = ({currentIndex}) => {
  const [currentMusicIndex, setCurrentMusicIndex] = useState(0);
  // const album = albumsData[parseInt(id)];

    const playlist = albumsData[currentIndex].playlist;
    console.log(playlist);

  const handleClickPrevious = () => {
    setCurrentMusicIndex((prevIndex) => 
      prevIndex === 0 ? playlist.length - 1 : prevIndex - 1
    );
  };

  const handleClickNext = () => {
    setCurrentMusicIndex((prevIndex) => 
      prevIndex < playlist.length - 1 ? prevIndex + 1 : 0
    );
  };

  console.log('cc : ' + playlist[currentMusicIndex].title);

  return (
    <div className='playerList'>

      {/* <div className='titreArt'>{playlist[currentMusicIndex].title} - {playlist[currentMusicIndex].artiste} </div> */}
      
      <AudioPlayer
        type="audio/mpeg"
        // layout='horizontal'
        onEnded={handleClickNext}
        autoPlayAfterSrcChange={true}
        showSkipControls={true}
        showJumpControls={true}
        src={playlist[currentMusicIndex].url}
        onClickPrevious={handleClickPrevious}
        onClickNext={handleClickNext}
        style={{
            width: '43vw'
          }}
        customProgressBarSection={
          [
            RHAP_UI.CURRENT_TIME,
            RHAP_UI.PROGRESS_BAR,
            RHAP_UI.DURATION,
            
          ]
        }
        customControlsSection={
          [
            <div className='titreArt'>{playlist[currentMusicIndex].title} - {playlist[currentMusicIndex].artiste} </div>,
            // RHAP_UI.ADDITIONAL_CONTROLS,
            RHAP_UI.MAIN_CONTROLS,
            // RHAP_UI.VOLUME_CONTROLS,
          ]
        }
      />

      
      
    </div>
  );
};

export default PlayerPlayList;
