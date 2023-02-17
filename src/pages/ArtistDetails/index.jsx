
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";


// export default function ArtistDetails() {

//     const { id } = useParams();
//     const [data, setData] = useState([]);

//     useEffect(() => {
//       axios
//         .get(`http://localhost:3000/api/artists/${id}`)
//         .then((res) => {
//           setData(res.data.artists);
//           console.log(res.data.artists);
//         })
//         .catch((err) => {
//           console.error(err);
//         });
//     }, [id]);
  
//     return (
//       <div>
//         <h1>{data?.name}</h1>
//         <p>{data?.description}</p>
//         <img src={data?.image} alt={data?.name} />
//         caca
//       </div>
//     );
// }


import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./artistdetails.css";

export default function ArtistDetails() {
  const { id } = useParams();
  const [artist, setArtist] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/artists/${id}`)
      .then(res => {
        setArtist(res.data.artist);
        console.log(res.data.artist);
      })
      .catch(err => {
        console.error(err);
      });
  }, [id]);

  return (
    <div>
      {artist ? (
        <div>
          <h1 className="">{artist.name}</h1>
          <p>{artist.description}</p>
          <img src={artist.image} alt={artist.name} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}