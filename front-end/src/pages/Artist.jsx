import React from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import SongList from "../components/SongList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

import "./Artist.css";

function Artist() {
  const { id } = useParams();
  // console.log(useParams())

    const {name, banner} = artistArray.filter(
      (currentArtistObs) => currentArtistObs._id === id
    )[0];
    // console.log(artistObjs)

    const songsArrayFromArtist = songsArray.filter((currentSongsObj) => currentSongsObj.artist === name);

    // console.log(songsArrayFromArtist)
  
    const randomIndex = Math.floor(Math.random()* (songsArrayFromArtist.length - 1))
    const randomIdFromArtist = songsArrayFromArtist[randomIndex]._id

    // console.log(randomIdFromArtist)

  return (
    <div className="artist">
      <div
        className="artist__header"
        style={{
          backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)),
    url(${banner})`,
        }}
      >
        <h2 className="artist__title">{name}</h2>
      </div>

      <div className="artist__body">
        <h2>Populares</h2>

        <SongList songsArray= {songsArrayFromArtist}/>
      </div>

      <Link to={`/song/${randomIdFromArtist}`}>
        <FaCirclePlay className="single-item__icon single-item__icon--artist" />
      </Link>
    </div>
  );
}

export default Artist;
