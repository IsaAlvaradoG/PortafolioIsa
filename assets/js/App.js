import React, { useState } from "react";
import "./styles.css";

import Spotify from "./services/SpotifyApi";
const api = new Spotify();

export default function App() {
  const [musica, setMusica] = useState("");

  const tocar = () => {
    api.apispotify({
      musicaURI: musica
    });
  };

  return (
    <div className="App">
      <h1>Musicas</h1>

      <input
        type="text"
        onChange={(e) => setMusica(e.target.value)}
        placeholder="Musica"
      />

      <button onClick={tocar}>Enviar</button>
    </div>
  );
}
