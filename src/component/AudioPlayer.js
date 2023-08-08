import React, { useState } from "react";
import { PlayIcon, PauseIcon } from "@heroicons/react/24/solid";

const AudioPlayer = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.createRef();

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <audio ref={audioRef} src={src} />
      {isPlaying ? (
        <PauseIcon onClick={togglePlay} width={40} />
      ) : (
        <PlayIcon onClick={togglePlay} width={40} />
      )}
    </div>
  );
};

export default AudioPlayer;
