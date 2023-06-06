import axios from "axios";
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 4_WtaFiwftYnGJrIusqNgTc1edF0fKhAWbf2ufUan1c",
  },
});
