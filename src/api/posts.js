// posts.js
import axios from 'axios';

export default axios.create({
  baseURL: 'https://react-blog-api.onrender.com'
});
