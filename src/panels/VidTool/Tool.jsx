import React, { useEffect, useState } from "react";
import "./Tool.css";
import back_icon from "../../assets/back_arrow_icon.png";
import { useNavigate, useNavigation, useParams } from "react-router-dom";

const Tool = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZTVjOTFjMDFhZGM5MTEwOWM3MmFjODA5N2E1YWM2OCIsIm5iZiI6MTczMDM0MzU0Ny4yODI5MDA4LCJzdWIiOiI2NzIyZWMyNzk3NGE2NzZjNmRmMzZiNzgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.1_RnEqylsDbqOYscxsN84N9uO5Bz8mlp9DouFQfuKag",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="player-tool">
      <img
        src={back_icon}
        onClick={() => {
          navigate(-2);
        }}
        alt=""
      />
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Tool;
