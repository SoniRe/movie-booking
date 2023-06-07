import { useEffect, useState } from "react";
import axios from "axios";
import "./PostList.css";
import { Link } from "react-router-dom";

function PostList() {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => {
        console.log(res.data);
        setMyData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {myData.map((post) => {
        const { score, show } = post;
        const { id, name, image, summary } = show;
        const { original } = image;

        var num = score * 10;
        num = num.toFixed(2);

        const myData = {
          movieName: name,
          rating: num,
          movieSummary: summary,
          movieImage: original,
        };

        return (
          <div className="card" key={id}>
            <img className="card__picture" src={original} alt="movie img" />
            <div className="card__details">
              <h2>{name}</h2>
              <p>Rating : {num}</p>
            </div>
            <Link className="btn" to="/about" state={myData}>
              Show More
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default PostList;
