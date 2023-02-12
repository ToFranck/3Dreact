// import { useState, useEffect } from "react";
// import React from "react";
// import axios from "axios";

// export default function Api() {
//   const [datas, setDatas] = useState([]);

//   useEffect(() => {
//     axios.get("https://jsonplaceholder.typicode.com/posts")
//     // axios
//     //   .get("http://localhost:3000/api/artists")
//       .then((res) => {
//         console.log(res);
//         // console.log(res.data)
//         // setDatas(res.data)
//         setDatas(Object.values(res.data));
//         // console.log(res.data)
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);
//   return (
//     <div>
//       <ul>
//         {/* {datas.map(data => (<li key={data.id}>{data.name} </li>)
//         )} */}
//         {/* <li key={datas._id}>{datas}</li> */}
//         <ul>
//           {datas.map((data, index) => (
//             <li key={index}>{data.name}</li>
//           ))}
//         </ul>
//       </ul>
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function Api() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/artists')
      .then(res => {
        setDatas(Object.values(res.data))
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <ul>
        {datas.map((data, index) => (
          <li key={data._id || index}>{data.name}</li>
        ))}
      </ul>
    </div>
  );
}