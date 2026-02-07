import VideoCard from "./VideoCard";
import { videoData } from "../data/videos";

export default function VideoGrid({ type }) {
  const filtered = type === "all" ? videoData : videoData.filter(v => v.type === type);

  return (
    <div className="video-grid">
      {filtered.map(video => <VideoCard key={video.id} video={video} />)}
    </div>
  );
}