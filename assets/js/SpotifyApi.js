import axios from "axios";

const api = axios.create({
  baseURL: "https://developer.spotify.com/documentation/web-api", // Replace with real Spotify API URL
});

export default class Spotify {
  async apispotify(musica) {
    await api.put("/spotifyplayer", musica);
  }
}
