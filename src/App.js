import { useState } from "react";
import Video from "./components/Video";
import Thumbnail from "./components/Thumbnail";

const videoURls = [
  "https://youtu.be/4QN1BzxF8wM",
  "https://youtu.be/A4_TFHzqAAg",
  "https://youtu.be/lkdLg0Nq4SQ",
  "https://youtu.be/4QN1BzxF8wM",
  "https://youtu.be/5051Qex1-m4",
  "https://youtu.be/2X4qGyaVdRU",
  "https://youtu.be/JVtkE8cgdOw",
  "https://youtu.be/4QN1BzxF8wM",
  "https://youtu.be/5051Qex1-m4",
  "https://youtu.be/2X4qGyaVdRU",
  "https://youtu.be/JVtkE8cgdOw"
];

export default function App() {
  const [ current, setCurrent ] = useState( "https://youtu.be/Kt3DavtVGVE" );
  return (
    <div className="App">
      <h1>Video Player</h1>
      <div className="video-player">
        <Video url={current} />
        <div className="thumbnails-preview">
          {videoURls.map( ( url ) => (
            <Thumbnail
              url={url}
              key={Date.now() + Math.random() * 100}
              setCurrent={setCurrent}
            />
          ) )}
        </div>
      </div>
    </div>
  );
}
