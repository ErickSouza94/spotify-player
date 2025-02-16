import React from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SingleItem = ({_id, image, name, banner, artist, idPath}) => {
  return (
    <>
      <Link to={`${idPath}/${_id}`} className="single-item">
        <div className="single-item__div-image-button">
          <div className="single-item__div-image">
            <img
              className="single-item__image"
              src={image}
              alt={`Imagem de ${name}`}
              // className={`single-item__image ${style === "square" ? "single-item__image--square" : ""}`} 
            />
          </div>

          <FaCirclePlay className="single-item__icon" />
        </div>

        <div className="single-item__texts">
          <div className="single-item__2lines">
            <p className="single-item__title">
              {name}
            </p>
          </div>

          <p className="single-item__type">{artist ?? "Artista"}</p>
        </div>
      </Link>
    </>
  );
};

export default SingleItem;
