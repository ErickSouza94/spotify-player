import React from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { FaStepForward, FaStepBackward, FaPauseCircle } from "react-icons/fa";
import { useRef } from "react";
import { useState, useEffect } from "react";

import "./Player.css";
import { Link } from "react-router-dom";


function Player({ duration, randomIdFromArtist, randomIdFromArtist2, audio }) {
  const audioPlayer = useRef();
  const progressBar = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(formatTime(0));

   
  
  const playPause = () => {
    isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play();
    setIsPlaying(!isPlaying);
    setCurrentTime(formatTime(audioPlayer.current.currentTime));
  };

  function formatTime(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor(timeInSeconds - minutes * 60)
      .toString()
      .padStart(2, "0");
  
    return `${minutes}:${seconds}`;
  }
  

  useEffect(() => {
    const intervalTime = setInterval(() => {
      if (isPlaying)
        setCurrentTime(formatTime(audioPlayer.current.currentTime));

      progressBar.current.style.setProperty("--_progress", (audioPlayer.current.currentTime / durationInSeconds) * 100 + '%')
    }, 1000);

    return () => clearInterval(intervalTime);
  }, [isPlaying]);

  const timeInSeconds = (timeString) => {
    const splitArray = timeString.split(":")
    const minutes = Number(splitArray[0])
    const seconds = Number(splitArray[1])
  
    return seconds + minutes * 60
  }

  const durationInSeconds = timeInSeconds(duration)
  // console.log(durationInSeconds)

  
  return (
    <div className="player">
      <div className="player__controllers">
        <Link to={`/song/${randomIdFromArtist}`}>
          <FaStepBackward className="player__icon" />
        </Link>
        {isPlaying ? (
          <FaPauseCircle
            className="player__icon player__icon--play"
            onClick={() => playPause()}
          />
        ) : (
          <FaCirclePlay
            className="player__icon player__icon--play"
            onClick={() => playPause()}
          />
        )}
        <Link to={`/song/${randomIdFromArtist2}`}>
          <FaStepForward className="player__icon" />
        </Link>
      </div>
      <div className="player__progress">
        <p>{currentTime}</p>

        <div className="player__bar">
          <div ref={progressBar} className="player__bar-progress"></div>
        </div>

        <p>{duration}</p>
      </div>

      <audio ref={audioPlayer} src={audio}></audio>
    </div>
  );
}

export default Player;
