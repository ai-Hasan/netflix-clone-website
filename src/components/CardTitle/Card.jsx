import React, { useEffect, useRef, useState } from "react";
import "./Card.css";
import All_cards_data from "../../assets/cards/All_cards_data";
import { Link } from "react-router-dom";

const Card = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardRef = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZTVjOTFjMDFhZGM5MTEwOWM3MmFjODA5N2E1YWM2OCIsIm5iZiI6MTczMDM0MzU0Ny4yODI5MDA4LCJzdWIiOiI2NzIyZWMyNzk3NGE2NzZjNmRmMzZiNzgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.1_RnEqylsDbqOYscxsN84N9uO5Bz8mlp9DouFQfuKag",
    },
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardRef.current.scrollLeft += event.deltaY;
  };
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));

    cardRef.current.addEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="card-title">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="list-card" ref={cardRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                alt=""
              />
              <p>{card.original_title} </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
