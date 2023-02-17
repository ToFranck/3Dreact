import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Api() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/artists")
      .then((res) => {
        setDatas(res.data.artists);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <ul>
        {datas.map((data, index) => (
          <li key={data._id || index}>
            <Link to={`/artists/${data._id}`}>
            {data.name} 
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
