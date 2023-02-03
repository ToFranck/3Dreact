
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000'
});

api.get('/data')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
