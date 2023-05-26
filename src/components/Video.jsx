import ReactPlayer from "react-player/youtube";

export default function Video( { url } ) {
    return (
        <>
            <article className="video-card">
                <ReactPlayer url={url} width="min(700px,85vw)" />
            </article>
        </>
    );
}
