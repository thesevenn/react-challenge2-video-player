import ReactPlayer from "react-player/youtube";

export default function Thumbnail( { url, setCurrent } ) {
    function changeCurrentVideo() {
        setCurrent( url );
    }
    return (
        <div className="thumbnail-card" onClick={changeCurrentVideo}>
            <ReactPlayer
                url={url}
                width="100px"
                height="100px"
                light={true}
                style={{ borderRadius: "50%", overflow: "hidden" }}
            />
        </div>
    );
}
